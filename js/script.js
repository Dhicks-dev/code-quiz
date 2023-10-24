const quizQuestions = [
    {
      question: "How can a datatype be declared to be a constant type?",
      options: ["const", "var", "let", "constant"],
      answer: "const"
    },
    {
      question: "What does NaN mean?",
      options: ["Not a Notary", "Not a Number", "Not a Notation", "Not a Necessity"],
      answer: "Not a Number"
    },
    // Add more questions and answers as needed
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach(function(option) {
      const li = document.createElement("li");
      li.textContent = option;
      optionsElement.appendChild(li);
    });
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.answer) {
      // User answered correctly
      // Update score or perform any other actions
    } else {
      // User answered incorrectly
      // Deduct points or perform any other actions
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex === quizQuestions.length) {
      // Quiz is complete
      // Display final score or perform any other actions
    } else {
      displayQuestion();
    }
  }
  
  function startQuiz() {
    const startButton = document.getElementById("start-button");
    startButton.style.display = "none";
  
    displayQuestion();
  
    const options = document.querySelectorAll("#options li");
    options.forEach(function(option) {
      option.addEventListener("click", checkAnswer);
    });
  }
  
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", startQuiz);

  let timerInterval;
  function startTimer() {
    let seconds = 30;
    timerInterval = setInterval(function() {
      seconds-- ;
      document.getElementById("seconds").textContent = seconds;
    }, 1000);
  }
  
  startTimer ();
