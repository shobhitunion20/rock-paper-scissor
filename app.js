const game=()=> {
    let pScore=0;
    let cScore=0;
    let person="";
    //start a game
    const startgame =()=>{
        const playbutton=document.querySelector(".game-name button");
        const intro=document.querySelector(".game-name");
        const match=document.querySelector(".match");

playbutton.addEventListener("click",()=>{
    intro.classList.add("fadeOut");
    match.classList.add("fadeIn");
    person = prompt("Enter Name");
});
    };
    
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
    
        hands.forEach(hand => {
          hand.addEventListener("animationend", function() {
            this.style.animation = "";
          })
        })
    

//computer options

const computeroptions=["rock","paper","scissors"];

options.forEach(option=> {
    option.addEventListener("click",function() {

 const computernum=Math.floor(Math.random()*3);
const computerChoice=computeroptions[computernum];

setTimeout(() => {
    compareHands(this.textContent,computerChoice,person);
 //Update Images
 playerHand.src = `./assessts/${this.textContent}.png`;
 computerHand.src = `./assessts/${computerChoice}.png`;
}, 2000);
//Animation
playerHand.style.animation = "shakePlayer 2s ease";
computerHand.style.animation = "shakeComputer 2s ease";
});
});
    }
//update score
const updateScore=()=>{
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};

  const compareHands = (playerChoice, computerChoice,person) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = person+" Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = person+" Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = person+" Wins";
        pScore++;
        updateScore();
        return;
      }
    }
}
  startgame();
  playMatch();
    }

game();




