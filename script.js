const questions = [
    {
        question: "What is coding?",
        options: ["arrow", "math tool", "none of the above", "data tructure that can store a fixed size collection of elements with the same data type"],
        answer: "data tructure that can store a fixed size collection of elements with the same data type"
    },
    {
        question: "What does JS stand for in programming?",
        options: ["Jackson state", "Javascript", "none of the above", "Jay Sean"],
        answer: "Javascript"



    },
    {
        question: "A variable inside a function is _?",
        options: ["Outside", "Inside", "Local", "Global"],
        answer: "Local"
    }, {

        question: "What is the style sheet or file used for?",
        options: ["nothing", "styles the website by adding color, fonts, size, etc", "adds the writing only", "it isn't used in programming"],
        answer: "styles the website by adding color, fonts, size, etc"
    }
];

let time = 10s
setInterval(myTimer, 1000);
function myTimer() {
    const date = new Date();
    document.getElementById("timer").innerHTML = time time--
}



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

let btnIndex = 0
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;

    answerButtons.innerHTML = ""
    let correctAnswer = currentQuestion.answer
    currentQuestion.options.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn");
        answerButtons.appendChild(button);



        if (correctAnswer == answer) {
            button.dataset.correct = true;

        }
        button.addEventListener("click", selectAnswer);


    });
}


function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }


}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        score++;
    }

    if (isCorrect)
        selectedBtn.classList.add("correct");
    else
        selectedBtn.classList.add("incorrect");
}

{

}




function showScore() {
    resetState();
    questionElement.innerHTML = `Your score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"

}

function handleNextButton() {


    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}




function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})


startQuiz();
