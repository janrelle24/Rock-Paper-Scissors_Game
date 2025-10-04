const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const mainContainer = document.querySelector(".main-container");
const battleContainer = document.querySelector(".battle-container");

const playerArea = document.querySelector(".area.left");
const computerArea = document.querySelector(".area.right");
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
    const icon = element.querySelector("i");
    const cls = side === "left" ? "animate-wave-left" : "animate-wave-right";
    icon.classList.add(cls);
    icon.addEventListener(
    "animationend",
    () => icon.classList.remove(cls),
    { once: true }
    );
}

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice){
    mainContainer.classList.add("hide");
    battleContainer.classList.add("show");

    //reset both hands to fist
    playerHand.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    computerHand.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;

    //animate both hands
    animateWave(playerHand, "left");
    animateWave(computerHand, "right");

    //get computer choice
    const computerChoice = getComputerChoice();

    //after waving, show the final choices
    setTimeout(() => {
        const playerData = choices.find(choice => choice.id === playerChoice);

        playerHand.innerHTML = `<i class="${playerData.icon}"></i>`;
        computerHand.innerHTML = `<i class="${computerChoice.icon}"></i>`;

        playerHand.setAttribute("data-choice", playerChoice);
        computerHand.setAttribute("data-choice", computerChoice.id);
        playerHand.setAttribute("data-label", playerData.label);
        computerHand.setAttribute("data-label", computerChoice.label);

        //call function to determine the winner
        checkWinner(playerChoice, computerChoice.id);
    },1000);
    

}

//add event listerners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));