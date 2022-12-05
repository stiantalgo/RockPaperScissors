window.addEventListener("load", function () {
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorBtn = document.getElementById("scissorBtn");
    
    const resultText = document.getElementById("resultText");
    const computerText = document.getElementById("computerText");
    const playerText = document.getElementById("playerText");
    
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const drawDisplay = document.getElementById("drawDisplay");
    
    let playWin = 0;
    let cpuWin = 0;
    let draws = 0;
    let hasWon = false;
    let gameOver = false;
    
    const RPS = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = RPS[randomNum];
    console.log(computerChoice);
    
    
    newGame();
    
    scissorBtn.addEventListener("click", () => {
        playGame("Rock", "Scissors");
        playerText.textContent = `You picked: Scissors!`;
    })    
    
    
    function newGame(){
        rockBtn.addEventListener("click", () => {
            playGame("Paper", "Rock");
            playerText.textContent = `You picked: Rock!`;
        })    
        
        paperBtn.addEventListener("click", () => {
            playGame("Scissors", "Paper");
            playerText.textContent = `You picked: Paper!`;
        })
    
        paperBtn.removeEventListener("click", () => {
            playGame("Scissors", "Paper");
            playerText.textContent = `You picked: Paper!`;
        })
    
        playerText.textContent = " Hello ";
        computerText.textContent = "Pick one :)"
        resultText.textContent = " And have fun!!";
    
        rockBtn.style.display = "";
        scissorBtn.style.display = "";    
        paperBtn.textContent = "Paper";
    
        playWin = 0;
        cpuWin = 0;
        draws = 0;
        hasWon = false;
    
        computerDisplay.textContent =`Total computer wins: ${cpuWin}`;   
        drawDisplay.textContent = `Total draws: ${draws}`; 
        playerDisplay.textContent = `Total player wins: ${playWin}`; 
    }
    
    function restartGame() {
        randomNum = Math.floor(Math.random() * 3);
        computerChoice = RPS[randomNum];
    }
    
    function winnerWinner(){
        if (playWin > cpuWin && hasWon){
            rockBtn.style.display = "none";
            scissorBtn.style.display = "none";    
            paperBtn.textContent = "Play again?";
    
            paperBtn.addEventListener("click", () => {
                
                newGame();
                
            })
    
    
        } else if(cpuWin > playWin && hasWon){
            rockBtn.style.display = "none";
            scissorBtn.style.display = "none";    
            paperBtn.textContent = "Play again?";
    
            paperBtn.addEventListener("click", () => {
                
                gameOverCheck();
                newGame();
            })
        }
    }
    
    function gameOverCheck(){
        gameOver = true;
    
        paperBtn.removeEventListener("click", () => {
            playGame("Scissors", "Paper");
            playerText.textContent = `You picked: Paper!`;
        })
    }
    
    function checkWinner() {
        if(playWin == 5 && !hasWon){
            hasWon = true; 
            console.log("Player WINNER");
            winnerWinner();
        }
        else if(cpuWin == 5 && !hasWon){
            hasWon = true;
            console.log("CPU WINNER");
            winnerWinner();
        }
        else{
            hasWon = false;
            console.log("no WINNER");
            
        }
    }
    
    function playGame(lose, draw) {
        restartGame();
        
        if (computerChoice == `${lose}`) {
            resultText.textContent = "You lose!"
            resultText.style.color = "red";
            cpuWin++;
    
        }
        else if (computerChoice == `${draw}`) {
            resultText.textContent = "Its a draw."
            resultText.style.color = "white";
            draws++;
        }
        else {
            resultText.textContent = "You win!"
            resultText.style.color = "green";
            playWin++;
        }
        computerText.textContent = `Computer: ${computerChoice}`
    
        computerDisplay.textContent =`Total computer wins: ${cpuWin}`;   
        drawDisplay.textContent = `Total draws: ${draws}`; 
        playerDisplay.textContent = `Total player wins: ${playWin}`; 
        checkWinner();
    }
    
    });
    
    
    
    
    