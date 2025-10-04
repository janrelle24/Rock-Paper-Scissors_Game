const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const mainContainer = document.querySelector(".main-container");
const battleContainer = document.querySelector(".battle-container");

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

const choices = [
    {id: "rock", icon: "fa-solid fa-hand-back-fist", label: "Rock"},
    {id: "paper", icon: "fa-solid fa-hand", label: "Paper"},
    {id: "scissors", icon: "fa-solid fa-hand-peace", label: "Scissors"}
];

function playRound(playerChoice){
    mainContainer.classList.add("hide");
    battleContainer.classList.add("show");

    
}

//add event listerners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));