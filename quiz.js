"use strict";

(() => {
  const app = document.getElementById("app");
  const start = document.getElementById("start");
  const status = document.getElementById("initialization-status");
  const questions = window.quizQuestions;
  if (!app || !start || !status) return;
  if (!Array.isArray(questions) || questions.length !== 8) {
    status.textContent = "Os dados das perguntas não estão disponíveis. Verifique o ficheiro questions.js e recarregue a página.";
    return;
  }

  let index = 0;
  let responses = [];
  const escape = (text) => String(text).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const score = () => responses.filter((response) => response.correct).length;
  const selectedInputs = (form) => Array.from(form.querySelectorAll("input:checked"));

  function focusHeading() {
    app.querySelector("[data-heading]").focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function restart() {
    index = 0;
    responses = [];
    renderQuestion();
  }

  function renderQuestion() {
    const question = questions[index];
    const multiple = question.correct.length > 1;
    let checked = false;
    app.innerHTML = `
      <div class="progress-meta">
        <span>Pergunta ${index + 1} de ${questions.length}</span>
        <span id="points">${score()} ${score() === 1 ? "ponto obtido" : "pontos obtidos"}</span>
      </div>
      <progress value="${index}" max="${questions.length}" aria-label="Perguntas concluídas"></progress>
      <span class="badge ${multiple ? "multiple" : ""}">${multiple ? "Várias respostas · Escolha 2" : "Resposta única"}</span>
      <h2 id="question-title" tabindex="-1" data-heading>${escape(question.title)}</h2>
      <p id="instruction" class="instruction muted">${multiple ? "Selecione exatamente duas respostas. Ambas devem estar corretas para ganhar o ponto." : "Escolha uma resposta."}</p>
      <form novalidate>
        <fieldset aria-describedby="instruction">
          <legend class="sr-only">${escape(question.title)}</legend>
          <div class="options">${question.options.map((option, optionIndex) => `
            <label class="option">
              <input type="${multiple ? "checkbox" : "radio"}" name="answer" value="${optionIndex}">
              <span class="option-text">${escape(option)}</span>
            </label>`).join("")}
          </div>
        </fieldset>
        <p id="selection-count" class="instruction muted" aria-live="polite" ${multiple ? "" : "hidden"}>0 de 2 respostas selecionadas</p>
        <p id="error" class="error" role="alert"></p>
        <div id="feedback" hidden tabindex="-1" role="region" aria-labelledby="feedback-title"></div>
        <div class="actions"><button class="primary" type="submit">Verificar resposta</button></div>
      </form>`;

    const form = app.querySelector("form");
    const error = app.querySelector("#error");
    const button = form.querySelector("button");
    form.addEventListener("change", () => {
      error.textContent = "";
      if (multiple) app.querySelector("#selection-count").textContent = `${selectedInputs(form).length} de 2 respostas selecionadas`;
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (checked) return;
      const selected = selectedInputs(form).map((input) => Number(input.value));
      if (selected.length !== question.correct.length) {
        error.textContent = multiple ? "Escolha exatamente duas respostas." : "Escolha uma resposta.";
        return;
      }
      checked = true;
      const correct = question.correct.every((answer) => selected.includes(answer));
      responses.push({ selected, correct });
      form.querySelectorAll("input").forEach((input) => {
        input.disabled = true;
        const label = input.closest("label");
        label.classList.add("locked");
        const isAnswer = question.correct.includes(Number(input.value));
        if (!isAnswer && !input.checked) return;
        label.classList.add(isAnswer ? "correct" : "incorrect");
        const tag = document.createElement("span");
        tag.className = "answer-tag";
        tag.textContent = isAnswer
          ? `✓ Resposta correta · ${input.checked ? "Selecionada" : "Não selecionada"}`
          : "✕ A sua seleção · Incorreta";
        label.querySelector(".option-text").appendChild(tag);
      });
      app.querySelector("#points").textContent = `${score()} ${score() === 1 ? "ponto obtido" : "pontos obtidos"}`;
      app.querySelector("progress").value = index + 1;
      const feedback = app.querySelector("#feedback");
      feedback.className = `feedback ${correct ? "" : "wrong"}`;
      feedback.innerHTML = `<strong id="feedback-title">${correct ? "✓ Muito bem! +1 ponto" : "Não foi desta vez. Consulte a explicação."}</strong><p>${escape(question.explanation)}</p>`;
      feedback.hidden = false;
      button.type = "button";
      button.textContent = index === questions.length - 1 ? "Ver a minha pontuação →" : "Pergunta seguinte →";
      button.addEventListener("click", () => {
        index += 1;
        if (index < questions.length) renderQuestion();
        else renderResults();
      }, { once: true });
      feedback.focus();
    });
    focusHeading();
  }

  function renderResults() {
    const total = score();
    const percentage = Math.round(total / questions.length * 100);
    const title = total === questions.length ? "Resultado perfeito!" : percentage >= 75 ? "Muito bom!" : "Está a entrar em foco!";
    app.innerHTML = `
      <div class="result-top">
        <p class="eyebrow">Quiz concluído</p>
        <div class="score-ring" style="--score-angle: ${percentage * 3.6}deg" aria-hidden="true">
          <div class="score-center"><strong>${percentage}%</strong><span>Pontuação final</span></div>
        </div>
        <h2 tabindex="-1" data-heading>${title}</h2>
        <p>Acertou em <strong>${total} de ${questions.length}</strong> (${percentage}%).</p>
        <p class="muted">Reveja as suas respostas abaixo e tente novamente. Continue a verificar sugestões importantes da IA antes de as utilizar.</p>
      </div>
      <div class="review">${questions.map((question, questionIndex) => {
        const response = responses[questionIndex];
        const answerText = (indices) => indices.map((answer) => escape(question.options[answer])).join(" • ");
        return `<details>
          <summary><span class="review-status ${response.correct ? "" : "wrong"}">${response.correct ? "✓ Correta" : "✕ Incorreta"}</span> · ${questionIndex + 1}. ${escape(question.title)}</summary>
          <p><strong>A sua resposta:</strong> ${answerText(response.selected)}</p>
          <p><strong>Resposta correta:</strong> ${answerText(question.correct)}</p>
          <p class="muted">${escape(question.explanation)}</p>
        </details>`;
      }).join("")}</div>
      <button id="restart" class="primary" type="button">Tentar novamente ↻</button>`;
    app.querySelector("#restart").addEventListener("click", restart);
    focusHeading();
  }

  start.addEventListener("click", restart);
  status.textContent = "";
  status.hidden = true;
  start.disabled = false;
})();
