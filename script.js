let randomN = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector(".submit");
const input = document.querySelector(".number-input");

const prevGuess = document.querySelector(".previous-guess-display");
const chanches = document.querySelector(".chances-left");
const lowHigh = document.querySelector(".low-or-high");
const wrongCorrect = document.querySelector(".wrong-or-correct");

const playAgain = document.querySelector(".play-again");
let guessCount = 10;

function resetGame() {
    guessCount = 10;
    playAgain.style.display = "none";

    wrongCorrect.textContent = "- - -";
    wrongCorrect.style.color = "#b8b5b5";
    wrongCorrect.style.backgroundColor = "white";

    lowHigh.textContent = "Low / High"
    lowHigh.style.color = "#b8b5b5";

    prevGuess.textContent = "None yet";
    prevGuess.style.color = "#b8b5b5"

    chanches.textContent = "Chances Left: 10";
    
    input.disabled = false;
    submit.disabled = false;

    randomN = Math.floor(Math.random() * 100) + 1;
}

function setGameOver() {
    input.disabled = true;
    submit.disabled = true;

    playAgain.style.display = "block";

    playAgain.addEventListener("click",resetGame);
}

function checkGuess() {
    const userGuess = Number(input.value);

    if ( guessCount === 10 ) {
        prevGuess.textContent = "";
        prevGuess.style.color = "black";
        lowHigh.style.color = "black";
    }

    prevGuess.textContent = `${prevGuess.textContent} ${userGuess}`;

    if ( userGuess === randomN ) {
        wrongCorrect.textContent = "Correct";
        wrongCorrect.style.color = "white";
        wrongCorrect.style.backgroundColor = "green";
        setGameOver();
    }
    else if ( guessCount <= 1 ) {
        wrongCorrect.textContent = "0 Chances Left";
        wrongCorrect.style.color = "white";
        wrongCorrect.style.backgroundColor = "black";
        setGameOver();
    }
    else {
        wrongCorrect.textContent = "Wrong";
        wrongCorrect.style.color = "white";
        wrongCorrect.style.backgroundColor = "red";

        if ( userGuess < randomN )
            lowHigh.textContent = "Too Low";

        else 
            lowHigh.textContent = "Too High";
    }

    guessCount--;
    input.value = "";
    input.focus();
    chanches.textContent = `Chances Left: ${guessCount}`;
}

submit.addEventListener("click",checkGuess);