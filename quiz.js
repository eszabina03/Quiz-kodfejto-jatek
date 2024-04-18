const restartBtn = document.getElementById('restart');
const exitBtn = document.getElementById('exit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const questionText = document.getElementById('question-text');


let questions = [
    {
        question: "Is coding ninjas the best online learning platform?",
        answers: [
            {option: "for sure",answer:true},
            {option:"No, not at all.",answer:false}
        ]
    },
    {
        question: "What is better if you wish to achieve success?",
        answers: [
            {option: "hard work",answer:false},
            {option:"smart work",answer:true}
        ]
    },
    {
        question: "Complete the phrase: Time and ___ wait for none.",
        answers: [
            {option: ".Batman",answer:false},
            {option:"Tide",answer:true}
        ]
    }
]

restartBtn.addEventListener('click',restart);
exitBtn.addEventListener('click',exit);

function beginQuiz()
{
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () =>
    {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer)
        {
            if(score<3)
            {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2)
        {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () =>
    {
        let ano = 1;
        if(questions[currentQuestion].answers[ano].answer)
        {
            if(score<3)
            {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2)
        {
            next();
        }
    }
}

beginQuiz();

function restart()
{
    currentQuestion = 0;
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next()
{
    currentQuestion++;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = question[currentQuestion].answers[0].option;
    trueBtn.onclick = () =>
    {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer)
        {
            if(score<3)
            {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2)
        {
            next();
        }
    }
    

}   