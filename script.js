const questions = [
  "Do you tend to avoid your girlfriend?",
  "Do you feel irritated when your partner asks for attention?",
  "Do you ignore texts when you're mad rather than explain why?",
  "Have you ever made your partner feel guilty for being upset?",
  "Do you believe being 'right' is more important than harmony?",
  "Do you apologize only when forced to?",
  "Have you ever used silence to manipulate someone?"
];

let currentQuestion = 0;
let score = 0;

const content = document.getElementById("content");

function showIntro() {
  content.innerHTML = `
    <p>Welcome to the Toxicity Game. Are you a toxic partner?
    Answer these few questions to find out.</p>
    <button class="button yes" onclick="showQuestion()">Start</button>
  `;
}

function showQuestion() {
  if (currentQuestion < questions.length) {
    content.innerHTML = `
      <p>${questions[currentQuestion]}</p>
      <button class="button yes" onclick="answer(true)">Yes</button>
      <button class="button no" onclick="answer(false)">No</button>
    `;
  } else {
    showResult();
  }
}

function answer(isYes) {
  if (isYes) score++;
  currentQuestion++;
  showQuestion();
}

function showResult() {
  let result = "";
  if (score <= 2) result = "Baby Plant Level (Low)";
  else if (score <= 4) result = "Tornado Level (Almost High)";
  else result = "Lava Level (Very High)";

  content.innerHTML = `
    <h2>Your Toxicity Level:</h2>
    <p>${result}</p>
    <p><span style="font-size: 24px">⚠️</span> Losing interest, but not losing the feelings?</p>
  `;
}

showIntro();
