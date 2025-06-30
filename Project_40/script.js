let userclick = document.getElementById("userclick");
let randomclick = document.getElementById("randomclick");
let result = document.getElementById("result");
let score = document.getElementById("score");

let Score = 0;

function conductGame(userChoice) {
    let index = Number(userChoice);
    let choices = ["Rock", "Paper", "Scissor"];
    let generateRandom = Math.floor(Math.random() * 3);
    userclick.textContent = choices[index];
    randomclick.textContent = choices[generateRandom];
    document.querySelector(".card").style.display = "flex";

    if (choices[index] === choices[generateRandom]) {
        result.textContent = "Draw!";
    } else if (
        (choices[index] === "Rock" && choices[generateRandom] === "Scissor") ||
        (choices[index] === "Paper" && choices[generateRandom] === "Rock") ||
        (choices[index] === "Scissor" && choices[generateRandom] === "Paper")
    ) {
        Score += 1;
        result.textContent = "You Won!";
    } else {
        Score -= 1;
        result.textContent = "Computer Won!";
    }

    score.textContent = `Score : ${Score}`;

    // Hide card and show icons again after 2 seconds
    setTimeout(function () {
        document.querySelector(".card").style.display = "none";
        document.querySelector(".game-icons").style.display = "flex";
    }, 2000);
}

function startGame() {
    document.querySelectorAll(".icons").forEach(icon => {
        icon.addEventListener("click", function () {
            const index = this.getAttribute("data-index"); // ✅ correct attribute
            document.querySelector(".game-icons").style.display = "none";
            conductGame(index);
        });
    });
}

startGame();
