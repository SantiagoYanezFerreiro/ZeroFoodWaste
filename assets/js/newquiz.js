// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
  {
    question: "How much food waste produced globally goes to waste?",
    imgSrc: "assets/images/quiz-1.jpg",
    choiceA: "33%",
    choiceB: "73%",
    choiceC: "10%",
    correct: "A",
  },
  {
    question:
      "What is the economical value of the food wasted every year in the world?",
    imgSrc: "assets/images/quiz-2.jpg",
    choiceA: "$10 Billion",
    choiceB: "$1 Billion",
    choiceC: "$1 Trillion",
    correct: "C",
  },
  {
    question:
      "What percentage of the total waster supply is used to grow food never eaten?",
    imgSrc: "assets/images/quiz-3.jpg",
    choiceA: "10th%",
    choiceB: "20th",
    choiceC: "3rd",
    correct: "C",
  },
  {
    question:
      "How much food would be needed to feed the nearly one billion hungry people in the world?",
    imgSrc: "assets/images/quiz-4.jpg",
    choiceA: "1/4",
    choiceB: "2x",
    choiceC: "The Annual Total ",
    correct: "C",
  },
  {
    question:
      "What can we do to be able to feed the extra 2.3 billion people that will leave on Earth by 2050?",
    imgSrc: "assets/images/quiz-5.jpg",
    choiceA: "Reduce Food Waste to 0",
    choiceB: "Increase food production by 300%",
    choiceC: "Increase food production 100% and reduce food wasted by 20%.",
    correct: "C",
  },
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "assets/images/emo-80.png"
      : scorePerCent >= 60
      ? "assets/images/emo-60.png"
      : scorePerCent >= 40
      ? "assets/images/emo-40.png"
      : scorePerCent >= 20
      ? "assets/images/emo-20.png"
      : "assets/images/emo-20.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
