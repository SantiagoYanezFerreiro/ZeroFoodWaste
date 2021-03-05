// const declaration to select elements.

const startbtn = document.getElementById("startbtn");
const quiz = document.getElementById("quiz");
const questiontext = document.getElementById("questiontext");
const quizimg = document.getElementById("quizimg");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeLeft = document.getElementById("timeLeft");
const progressCircles = document.getElementById("progressCircles");
const scoreContainer = document.getElementById("scoreContainer");
const resetButton = document.getElementById("resetButton");
const infoButton = document.getElementById("infoButton");
const quizDiv = document.getElementById("quiz");
const containerDiv = document.getElementById("container");

// Questions array

let questions = [
  {
    questiontext: "How much food waste produced globally goes to waste?",
    imgSrc: "assets/images/quiz-1.jpg",
    optionA: "33%",
    optionB: "73%",
    optionC: "10%",
    correct: "A",
  },
  {
    questiontext:
      "What is the economical value of the food wasted every year in the world?",
    imgSrc: "assets/images/quiz-2.jpg",
    optionA: "$10 Billion",
    optionB: "$1 Billion",
    optionC: "$1 Trillion",
    correct: "C",
  },
  {
    questiontext:
      "What percentage of the total waster supply is used to grow food never eaten?",
    imgSrc: "assets/images/quiz-3.jpg",
    optionA: "10th%",
    optionB: "20th",
    optionC: "3rd",
    correct: "C",
  },
  {
    questiontext:
      "How much food would be needed to feed the nearly one billion hungry people in the world?",
    imgSrc: "assets/images/quiz-4.jpg",
    optionA: "1/4",
    optionB: "2x",
    optionC: "The Annual Total ",
    correct: "C",
  },
  {
    questiontext:
      "What can we do to be able to feed the extra 2.3 billion people that will leave on Earth by 2050?",
    imgSrc: "assets/images/quiz-5.jpg",
    optionA: "Reduce Food Waste to 0",
    optionB: "Increase food production by 300%",
    optionC: "Increase food production 100%.",
    correct: "C",
  },
];

const lastQuestion = questions.length - 1;
let actualQuestion = 0;
let count = 0;
const maxTime = 10;
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / maxTime;
let stopWatch;
let score = 0;

//Start Quiz
startbtn.addEventListener("click", initializeQuiz);

//Change Bg to White when the Quick starts
startbtn.addEventListener("click", function () {
  $('#container').css("background","#fff");
});

function renderQuestion() {
  let q = questions[actualQuestion];
  questiontext.innerHTML = "<p>" + q.questiontext + "</p>";
  questionImage.innerHTML = "<img src=" + q.imgSrc + ">";
  optionA.innerHTML = q.optionA;
  optionB.innerHTML = q.optionB;
  optionC.innerHTML = q.optionC;
}

function initializeQuiz() {
  startbtn.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  stopWatch = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// Render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progressCircles.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

//Show quiz progress
function renderCounter() {
  if (count <= maxTime) {
    counter.innerHTML = count;
    timeLeft.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    if (actualQuestion < lastQuestion) {
      actualQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(stopWatch);
      scoreRender();
    }
  }
}

function AddScoreBgIfAnswerCorrect(answer) {
  if (answer == questions[actualQuestion].correct) {
        score++;
        document.getElementById(actualQuestion).style.backgroundColor = "#115c07";
  } else {
        document.getElementById(actualQuestion).style.backgroundColor = "#f00";
  }
  count = 0;
  if (actualQuestion < lastQuestion) {
    actualQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(stopWatch);
    scoreRender();
  }
}

function scoreRender() {
  scoreContainer.style.display = "block";
  quizDiv.style.display = "none";
  resetButton.style.display = "block";
  infoButton.style.display = "block";

// Calculate Score and display it with related image depending on how well the user did.
  const finalScore = Math.round((100 * score) / questions.length);

// Choose the image based on the finalScore
  let img =
    finalScore >= 80 ? "assets/images/emo-80.png" :
    finalScore >= 60 ? "assets/images/emo-60.png" :
    finalScore >= 40 ? "assets/images/emo-40.png" :
    finalScore >= 20 ? "assets/images/emo-20.png" :
    "assets/images/emo-20.png";
  scoreContainer.innerHTML = "<img src=" + img + ">";
  scoreContainer.innerHTML += "<p>" + finalScore + "%</p>";
}

function reloadP() {
     window.location.reload();
    }

  

  
  

  


