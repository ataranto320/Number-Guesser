// player must guess a number between a min and a max

// player gets a certain amount of guesses

// notify player of guesses reamaining 

// notify the player of the correct answer if they loose

// let the player choose to play again

// game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// ui elements 
const game = document.querySelector("game"),
minNum = document.querySelector(".min-num"),
maxNum = document.querySelector(".max-num"),
guessBtn = document.querySelector("#guess-btn"),
guessInput = document.querySelector("#guess-input"),
message = document.querySelector(".message");
