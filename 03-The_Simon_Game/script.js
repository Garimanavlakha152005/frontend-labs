let levelTitle = document.querySelector("#level-title");

let gamePattern = [];
let userPattern = [];

let level = 0;
let gameStarted = false;

const buttonColors = ["green", "red", "yellow", "blue"];

// Start the game
window.addEventListener("keydown", function () {

    if (!gameStarted) {
        gameStarted = true;
        level = 0;
        gamePattern = [];
        nextSequence();
    }

});

// Generate next sequence
function nextSequence() {

    userPattern = [];
    level++;

    levelTitle.innerHTML = "Level " + level;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomNumber];

    gamePattern.push(randomColor);

    flashButton(randomColor);
}

// Play sound
function playSound(name) {

    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

// Flash animation
function flashButton(color) {

    const button = document.getElementById(color);

    playSound(color);

    button.classList.add("flash");

    setTimeout(function () {
        button.classList.remove("flash");
    }, 150);

}

// Button click
document.querySelectorAll(".btn").forEach(function (button) {

    button.addEventListener("click", function () {

        if (!gameStarted) return;

        let userChosenColor = this.id;

        userPattern.push(userChosenColor);

        flashButton(userChosenColor);

        checkAnswer(userPattern.length - 1);

    });

});

// Check user's answer
function checkAnswer(currentIndex) {

    if (userPattern[currentIndex] === gamePattern[currentIndex]) {

        if (userPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        endGame();

    }

}

// Game Over
function endGame() {

    playSound("wrong");

    document.body.classList.add("game-over");

    setTimeout(function () {
        document.body.classList.remove("game-over");
    }, 200);

    levelTitle.innerHTML = "Game Over! Press Any Key to Restart";

    gameStarted = false;
    gamePattern = [];
    userPattern = [];
    level = 0;

}