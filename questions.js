"use strict";

// Shared data for quiz.js. Correct answers are zero-based option indices.
// Six questions have one correct answer; two have exactly two correct answers.
// The controller awards one point only when the selected set matches fully.
window.quizQuestions = [
  {
    title: "O que significa GPT?",
    options: [
      "Global Photography Tool",
      "Generative Pre-trained Transformer",
      "Graphic Processing Technology",
      "Guided Photo Training"
    ],
    correct: [1],
    explanation: "GPT significa Generative Pre-trained Transformer. É um tipo de modelo de IA que aprende padrões durante o treino e os utiliza para gerar respostas."
  },
  {
    title: "Qual descrição melhor representa um assistente de IA baseado em GPT?",
    options: [
      "Uma pessoa a responder às mensagens nos bastidores",
      "Uma definição da câmara que controla a exposição",
      "Um software que gera respostas com base em padrões aprendidos e nas informações fornecidas",
      "Uma base de dados que apresenta sempre factos verificados"
    ],
    correct: [2],
    explanation: "Um assistente baseado em GPT gera respostas utilizando padrões aprendidos e o contexto fornecido. Não é humano e as suas respostas não são verificadas automaticamente."
  },
  {
    title: "Pretende uma legenda para uma fotografia de paisagem no Instagram. O que é um prompt?",
    options: [
      "A instrução ou mensagem que fornece à IA",
      "O número de píxeis da fotografia",
      "Um filtro aplicado automaticamente à imagem",
      "A velocidade do obturador da câmara"
    ],
    correct: [0],
    explanation: "Um prompt é a informação que fornece à IA. Por exemplo: Escreva uma legenda curta e tranquila para o nascer do sol numa montanha com nevoeiro. Não utilize hashtags."
  },
  {
    title: "Em quais DUAS tarefas um assistente GPT poderia ajudar na preparação de uma sessão de retratos?",
    options: [
      "Sugerir uma lista de fotos com base no briefing criativo",
      "Garantir condições meteorológicas perfeitas no local",
      "Sugerir poses e ideias de iluminação",
      "Ajustar fisicamente as luzes sem equipamentos ligados"
    ],
    correct: [0, 2],
    explanation: "O GPT pode ajudar a criar listas de fotografias, poses e abordagens de iluminação. Não pode garantir o tempo nem mover equipamentos físicos por conta própria. Utilize as sugestões como ponto de partida para adaptar e testar."
  },
  {
    title: "Qual prompt fornece as instruções mais claras a um assistente de IA para criar uma legenda de fotografia?",
    options: [
      "Escreva alguma coisa.",
      "Uma legenda para a fotografia, por favor.",
      "Escreva algo bom.",
      "Escreva uma legenda acolhedora, com menos de 20 palavras e sem hashtags, para uma fotografia de casamento na praia."
    ],
    correct: [3],
    explanation: "Um contexto, tom e restrições específicos ajudam a IA a adaptar a resposta. Pense num bom prompt como instruções criativas claras e depois verifique se o resultado corresponde ao pedido."
  },
  {
    title: "O GPT recomenda uma definição da câmara que parece invulgar. O que deve fazer?",
    options: [
      "Confiar, pois a IA nunca comete erros",
      "Consultar o manual da câmara e testar a sugestão",
      "Presumir que a mesma definição funciona para todas as fotografias",
      "Eliminar imediatamente as predefinições existentes na câmara"
    ],
    correct: [1],
    explanation: "A IA pode cometer erros ou ignorar informações importantes do contexto. Consulte fontes fiáveis e teste as sugestões, especialmente quando o modelo da câmara ou as condições da fotografia forem relevantes."
  },
  {
    title: "Antes de enviar o retrato de um cliente para um serviço de IA, quais são as DUAS medidas responsáveis?",
    options: [
      "Confirmar que tem a autorização adequada para partilhar a fotografia",
      "Presumir que todos os serviços de IA mantêm os ficheiros enviados totalmente privados",
      "Analisar a política de privacidade e os controlos de dados do serviço",
      "Incluir a morada do cliente mesmo quando for desnecessário"
    ],
    correct: [0, 2],
    explanation: "Certifique-se de que tem a autorização adequada e compreende como o serviço trata os ficheiros enviados, incluindo o armazenamento e a possível utilização no treino. Evite partilhar informações pessoais desnecessárias."
  },
  {
    title: "Todas as aplicações baseadas em GPT conseguem compreender uma fotografia enviada?",
    options: [
      "Sim, todas as aplicações GPT suportam imagens automaticamente",
      "Sim, mas apenas se a fotografia estiver a preto e branco",
      "Não, depende das capacidades do modelo e das funcionalidades da aplicação",
      "Não, a IA nunca pode trabalhar com imagens"
    ],
    correct: [2],
    explanation: "Alguns modelos suportam imagens, enquanto outros trabalham apenas com texto. A aplicação também tem de permitir o envio de imagens. Mesmo os modelos capazes de analisar imagens podem interpretar detalhes visuais incorretamente."
  }
];
