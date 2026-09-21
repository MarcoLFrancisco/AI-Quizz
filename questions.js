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
    explanation: "GPT significa Generative Pre-trained Transformer. É um tipo de modelo de IA que aprende padrões durante o treinamento e os utiliza para gerar respostas."
  },
  {
    title: "Qual descrição melhor representa um assistente de IA baseado em GPT?",
    options: [
      "Uma pessoa respondendo às mensagens nos bastidores",
      "Uma configuração da câmera que controla a exposição",
      "Um software que gera respostas com base em padrões aprendidos e nas informações fornecidas por você",
      "Um banco de dados que sempre retorna fatos verificados"
    ],
    correct: [2],
    explanation: "Um assistente baseado em GPT gera respostas usando padrões aprendidos e o contexto fornecido por você. Ele não é humano e suas respostas não são verificadas automaticamente."
  },
  {
    title: "Você quer uma legenda para uma foto de paisagem no Instagram. O que é um prompt?",
    options: [
      "A instrução ou mensagem que você fornece à IA",
      "O número de pixels da sua foto",
      "Um filtro aplicado automaticamente à imagem",
      "A velocidade do obturador da câmera"
    ],
    correct: [0],
    explanation: "Um prompt é a informação que você fornece à IA. Por exemplo: Escreva uma legenda curta e tranquila para o nascer do sol em uma montanha com neblina. Não use hashtags."
  },
  {
    title: "Em quais DUAS tarefas um assistente GPT poderia ajudar na preparação de uma sessão de retratos?",
    options: [
      "Sugerir uma lista de fotos com base no briefing criativo",
      "Garantir condições climáticas perfeitas no local",
      "Sugerir poses e ideias de iluminação",
      "Ajustar fisicamente as luzes sem equipamentos conectados"
    ],
    correct: [0, 2],
    explanation: "O GPT pode ajudar a criar listas de fotos, poses e abordagens de iluminação. Ele não pode garantir o clima nem mover equipamentos físicos por conta própria. Use as sugestões como ponto de partida para adaptar e testar."
  },
  {
    title: "Qual prompt fornece o briefing mais claro a um assistente de IA para criar uma legenda de foto?",
    options: [
      "Escreva alguma coisa.",
      "Uma legenda para a foto, por favor.",
      "Faça algo bom.",
      "Escreva uma legenda acolhedora, com menos de 20 palavras e sem hashtags, para uma foto de casamento na praia."
    ],
    correct: [3],
    explanation: "Contexto, tom e restrições específicos ajudam a IA a adaptar a resposta. Pense em um bom prompt como um briefing criativo claro e depois confira se o resultado atende ao pedido."
  },
  {
    title: "O GPT recomenda uma configuração de câmera que parece incomum. O que você deve fazer?",
    options: [
      "Confiar, pois a IA nunca comete erros",
      "Consultar o manual da câmera e testar a sugestão",
      "Presumir que a mesma configuração funciona para todas as fotos",
      "Excluir imediatamente as predefinições existentes na câmera"
    ],
    correct: [1],
    explanation: "A IA pode cometer erros ou ignorar informações importantes do contexto. Consulte fontes confiáveis e teste as sugestões, especialmente quando o modelo da câmera ou as condições da foto forem relevantes."
  },
  {
    title: "Antes de enviar o retrato de um cliente a um serviço de IA, quais são as DUAS atitudes responsáveis?",
    options: [
      "Confirmar que você tem a permissão adequada para compartilhar a foto",
      "Presumir que todos os serviços de IA mantêm os arquivos enviados totalmente privados",
      "Analisar a política de privacidade e os controles de dados do serviço",
      "Incluir o endereço do cliente mesmo quando for desnecessário"
    ],
    correct: [0, 2],
    explanation: "Certifique-se de ter a permissão adequada e entenda como o serviço trata os arquivos enviados, incluindo o armazenamento e o possível uso em treinamento. Evite compartilhar informações pessoais desnecessárias."
  },
  {
    title: "Todos os aplicativos baseados em GPT conseguem compreender uma fotografia enviada?",
    options: [
      "Sim, todos os aplicativos GPT aceitam imagens automaticamente",
      "Sim, mas somente se a foto estiver em preto e branco",
      "Não, isso depende dos recursos do modelo e das funcionalidades do aplicativo",
      "Não, a IA nunca pode trabalhar com imagens"
    ],
    correct: [2],
    explanation: "Alguns modelos aceitam imagens, enquanto outros trabalham apenas com texto. O aplicativo também precisa oferecer suporte ao envio de imagens. Mesmo modelos capazes de analisar imagens podem interpretar detalhes visuais incorretamente."
  }
];
