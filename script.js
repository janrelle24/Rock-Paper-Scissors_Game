const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const mainContainer = document.querySelector(".main-container");
const battleContainer = document.querySelector(".battle-container");

const playerArea = document.querySelector(".area.left");
const computerArea = document.querySelector(".area.right");
const playerHand = document.getElementById("player-hand");
const computerHand = document.getElementById("computer-hand");

const resultText = document.querySelector(".result-text");
const playAgainBtn = document.getElementById("play-again");
const playAgainContainer = document.querySelector(".play-again-container");

const winCountEl = document.getElementById("win-count");
const loseCountEl = document.getElementById("lose-count");
const drawCountEl = document.getElementById("draw-count");


let winCount = 0;
let loseCount = 0;
let drawCount = 0;
let matchOver = false;

const WIN_LIMIT = 3;

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
    if(matchOver) return true; //stop the game if match already ended

    mainContainer.classList.add("hide");
    battleContainer.classList.remove("hide");
    battleContainer.classList.add("show");

    // hide play again button initially
    playAgainContainer.classList.remove("show");

    //reset both hands to fist
    playerHand.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    computerHand.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`;
    resultText.textContent = "Ready...";
    resultText.textContent = "Go...";
    resultText.textContent = "Fight!...";
    resultText.textContent = "Rock... Paper... Scissors...";

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

        //show play again button
        setTimeout(() =>{
            playAgainContainer.classList.add("show");
        }, 500);
    },1000);
    

}

function checkWinner(player, computer){
    let result = "";

    if(player === computer){
        drawCount++;
        result = "It's a Draw!";
    }
    else if(
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ){
        winCount++;
        result = "You win this round!";
    }
    else{
        loseCount++;
        result = "You Lost!";
    }

    resultText.textContent = result;
    winCountEl.textContent = winCount;
    loseCountEl.textContent = loseCount;
    drawCountEl.textContent = drawCount;

    //check if match is over
    if(winCount === WIN_LIMIT || loseCount === WIN_LIMIT){
        matchOver = true;
        setTimeout(() =>{
            if(winCount === WIN_LIMIT){
                resultText.textContent = "🎉Congrats, You won the match!";
            }else{
                resultText.textContent ="💻 Sorry, Computer won the match!";
            }
            playAgainContainer.classList.add("show");
        }, 800);
    }

}
//Reset Game
playAgainBtn.addEventListener("click", () =>{
    if(matchOver){
        matchOver = false;
        winCount = 0;
        loseCount = 0;
        drawCount = 0;

        winCountEl.textContent = "0";
        loseCountEl.textContent = "0";
        drawCountEl.textContent = "0";
    }
    

    battleContainer.classList.remove("show");
    mainContainer.classList.remove("hide");
    playAgainContainer.classList.remove("show");
    resultText.textContent = "Ready...";
    //
    
});
//add event listerners
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));