"use strict";

// Shared data for quiz.js. Correct answers are zero-based option indices.
// Six questions have one correct answer; two have exactly two correct answers.
// The controller awards one point only when the selected set matches fully.
window.quizQuestions = [
  {
    title: "What does GPT stand for?",
    options: [
      "Global Photography Tool",
      "Generative Pre-trained Transformer",
      "Graphic Processing Technology",
      "Guided Photo Training"
    ],
    correct: [1],
    explanation: "GPT stands for Generative Pre-trained Transformer. It is a type of AI model that learns patterns during training and uses them to generate responses."
  },
  {
    title: "Which description best fits an AI assistant powered by GPT?",
    options: [
      "A person answering messages behind the scenes",
      "A camera setting that controls exposure",
      "Software that generates responses based on learned patterns and your input",
      "A database that always returns verified facts"
    ],
    correct: [2],
    explanation: "A GPT-powered assistant generates responses using learned patterns and the context you provide. It is not a human, and its answers are not automatically verified."
  },
  {
    title: "You want an Instagram caption for a landscape photo. What is a prompt?",
    options: [
      "The instruction or message you give the AI",
      "The number of pixels in your photo",
      "A filter automatically applied to your image",
      "The speed of your camera's shutter"
    ],
    correct: [0],
    explanation: "A prompt is your input to the AI. For example: Write a short, peaceful caption for a misty mountain sunrise. Avoid hashtags."
  },
  {
    title: "Which TWO tasks could a GPT assistant help with when preparing a portrait shoot?",
    options: [
      "Suggest a shot list based on your creative brief",
      "Guarantee perfect weather at your location",
      "Brainstorm poses and lighting ideas",
      "Physically adjust your lights without connected equipment"
    ],
    correct: [0, 2],
    explanation: "GPT can help brainstorm shot lists, poses, and lighting approaches. It cannot guarantee the weather or move physical equipment on its own. Treat its suggestions as a starting point to adapt and test."
  },
  {
    title: "Which prompt gives an AI assistant the clearest brief for a photo caption?",
    options: [
      "Write something.",
      "Photo caption please.",
      "Make it good.",
      "Write a warm caption under 20 words for a beach wedding photo, with no hashtags."
    ],
    correct: [3],
    explanation: "Specific context, tone, and constraints help the AI tailor its response. Think of a good prompt as a clear creative brief, then check whether the result meets it."
  },
  {
    title: "GPT recommends a camera setting that sounds unusual. What should you do?",
    options: [
      "Trust it because AI never makes mistakes",
      "Check your camera's manual and test the suggestion",
      "Assume the same setting works for every photo",
      "Delete your existing camera presets immediately"
    ],
    correct: [1],
    explanation: "AI can make mistakes or miss important context. Check reliable sources and test suggestions, especially when the camera model or shooting conditions matter."
  },
  {
    title: "Before uploading a client's portrait to an AI service, which TWO steps are responsible?",
    options: [
      "Check that you have appropriate permission to share it",
      "Assume every AI service keeps uploads completely private",
      "Review the service's privacy policy and data controls",
      "Include the client's address even when it is unnecessary"
    ],
    correct: [0, 2],
    explanation: "Make sure you have appropriate permission and understand how the service handles uploads, including storage and possible training use. Avoid sharing unnecessary personal information."
  },
  {
    title: "Can every GPT-powered app understand an uploaded photograph?",
    options: [
      "Yes, every GPT app automatically supports images",
      "Yes, but only if the photo is black and white",
      "No, it depends on the model's capabilities and the app's features",
      "No, AI can never work with images"
    ],
    correct: [2],
    explanation: "Some models support image input, while others are text-only. The app must also provide image-upload support. Even image-capable models can misinterpret visual details."
  }
];
