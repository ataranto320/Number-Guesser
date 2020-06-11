// player must guess a number between a min and a max

// player gets a certain amount of guesses

// notify player of guesses reamaining 

// notify the player of the correct answer if they loose

// let the player choose to play again

// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// ui elements 
const game = document.querySelector("game"),
minNum = document.querySelector(".min-num"),
maxNum = document.querySelector(".max-num"),
guessBtn = document.querySelector("#guess-btn"),
guessInput = document.querySelector("#guess-input"),
message = document.querySelector(".message");

// assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener 
game.addEventListener("mousedown", function(e) {
    // console.log(1);
    if (e.target.className === "play-again") {
        window.location.reload();
    }
});

// listen for guess
guessBtn.addEventListener("click", function() {
    // console.log(guessInput.value);
    let guess = parseInt(guessInput.value);
    // console.log(guess);
    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }
    //check if won
    if (guess === winningNum) {
        // game over - win
        gameOver(true, `${winningNum} is correct, you win`)
        // // disable input
        // guessInput.disabled = true;
        // // change border color
        // guessInput.style.borderColor = "green";
        // // set message
        // setMessage(`${winningNum} is correct, you win`, "green");
    } else {
        // wrong number
        guessesLeft -= 1;
        // guessesLeft = guessesLeft -1
        if (guessesLeft === 0) {
            // game over - lose
            gameOver(false, `Game Over, you lost. The answer correct answer was ${winningNum}`)
        //     // disable input
        // guessInput.disabled = true;
        // // change border color
        // guessInput.style.borderColor = "red";
        // // set message
        // setMessage(`Game Over, you lost. The answer correct answer was ${winningNum}`, "red");
        } else {
        // game continues - answer wrong
        // change border color
        guessInput.style.borderColor = "red";
        // clear input
        guessInput.value = "";
        // tell user the number is wrong
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
        }
    }
});

// game over 
function gameOver(won, msg) {
    let color;
    won === true ? color = "green" : color = "red";
    //disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set text color
    message.style.color = color;
    // set message
    setMessage(msg);
    // play again
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
}

// get winning number
function getRandomNum(min, max) {
    // console.log(Math.floor(Math.random() * (max-min+1) + min));
    return Math.floor(Math.random() * (max-min+1) + min)
}

// set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
