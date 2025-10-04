const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const mainContainer = document.querySelector(".main-container");
const battleContainer = document.querySelector(".battle-container");

const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

const choices = [
    {id: "rock", icon: "fa-solid fa-hand-back-fist", label: "Rock"},
    {id: "paper", icon: "fa-solid fa-hand", label: "Paper"},
    {id: "scissors", icon: "fa-solid fa-hand-peace", label: "Scissors"}
];

//animate wave function
function animateWave(element, side) {
    const cls = side === "left" ? "animate-wave-left" : "animate-wave-right";
    element.classList.add(cls);
    element.addEventListener("animationend", () => {
        element.classList.remove(cls);
    }, { once: true });
}

function playRound(playerChoice){
    mainContainer.classList.add("hide");
    battleContainer.classList.add("show");

    //animate both hands
    animateWave(playerHand, "left");
    animateWave(computerHand, "right");

}

//add event listerners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));