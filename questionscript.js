let questionNumber = 0;
let score =0;
const questions = [
    { 
        question: "What is the effectiveness of Fire on Grass?",
        correct: "Super effective"
    },
        { 
        question: "What is the effectiveness of Electric on Ground?",
        correct: "No effect"
    },
        { 
        question: "What is the effectiveness of Steel on Ice?",
        correct: "Super effective"
    },
        { 
        question: "What is the effectiveness of Water on Poison?",
        correct: "Neutrally effective"
    },
        { 
        question: "What is the effectiveness of Ghost on Normal?",
        correct: "No effect"
    },
        { 
        question: "What is the effectiveness of Water on Grass?",
        correct: "Not very effective"
    },
        { 
        question: "What is the effectiveness of Dragon on Dragon?",
        correct: "Super effective"
    },
        { 
        question: "What is the effectiveness of Bug on Psychic?",
        correct: "Super effective"
    }]
 
const questionElement = document.getElementById("question");
const buttons = document.querySelectorAll(".multiple-choice button");
questionElement.textContent = questions[0].question;
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === questions[questionNumber].correct) {
            alert("Correct! :D");
            score = score+1;
        } else {
            alert("Incorrect! :(");
        }
        questionNumber++;
if (questionNumber < questions.length) {
    questionElement.textContent = questions[questionNumber].question;
} else {
   document.body.innerHTML = `<main>
    <h1>Quiz Complete!</h1> 
    <p class = "scoretxt">Your score: ${score} out of ${questions.length}</p>
   <button class="restart" onclick="location.reload()">Play Again?</button>
    </main>`
}
});
});




