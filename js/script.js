const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const timerElement = document.getElementById("time-left");
const scoreContainer = document.getElementById("score-container");
const submitScoreButton = document.getElementById("submit-score-btn");
let timeLeft = 60; // Initial time in seconds
let timer;

// Quiz questions data
const questions = [
    {
        question: "What is 7 + 2?",
        answers: ["3", "4", "5", "9"],
        correctAnswer: "9"
    },
    {
      question: "What is 2 + 2?",
      answers: ["3", "4", "5", "6"],
      correctAnswer: "4"
  },
  {
    question: "What is 3 + 2?",
    answers: ["3", "4", "5", "6"],
    correctAnswer: "5"
},
    
];

let currentQuestionIndex = 0;

// Event listener for the start button
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.style.display = "none"; // Hide start button
    timer = setInterval(updateTimer, 1000); // Start timer
    showQuestion();
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    }
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.answers.map(answer => `<li><button onclick="checkAnswer('${answer}')">${answer}</button></li>`).join('')}
        </ul>
    `;
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        // Correct answer logic
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    } else {
        // Incorrect answer logic
        timeLeft -= 10; // Subtract 10 seconds
        if (timeLeft <= 0) {
            endQuiz();
        } else {
            showQuestion();
        }
    }
}

function endQuiz() {
    clearInterval(timer);
    questionContainer.innerHTML = "<h2>Quiz Over!</h2>";
    scoreContainer.style.display = "block";
}

submitScoreButton.addEventListener("click", saveScore);

function saveScore() {
    const initials = document.getElementById("initials").value;
    const score = timeLeft;
    // Here you can save initials and score to local storage or send to a server
    alert(`Score saved! Initials: ${initials}, Score: ${score}`);
}
