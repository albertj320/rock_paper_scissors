let totalRounds = 0; 
let playerScore = 0;
let compScore = 0;
let tieScore = 0; //global variables..

//real game, 5 rounds with user input prompt
function game(){

    let playerSelection = prompt("Round " + (totalRounds + 1) + 
        "/5: Rock, paper, or scissors?", ''); //playerSelection prompt
        
    playerSelection = playerSelection.toLowerCase(); //case insensitive player selection
        
    function computerPlay(){
            let choiceArray = ['rock','paper','scissors'];
            let rand = Math.floor(Math.random() * choiceArray.length);
            return choiceArray[rand];
    } //computer random play in round
        
    let computerSelection = computerPlay(); //computerSelection assigned

    function playRound(playerSelection, computerSelection){ //Single Round function

        function outcomeWin(){
        console.log("You Win! "+ playerSelection + 
        " beats " + computerSelection +".");
        }

        function outcomeLoss(){
        console.log("You Lose! "+ playerSelection + 
        " loses to " + computerSelection +".");
        }

        function outcomeTie(){
        console.log("You are tied! Both you and the computer played "
        + playerSelection+".");
        }
        
        //conditional statements of the game in single round
        if (playerSelection == 'rock' && computerSelection == 'scissors'){
            outcomeWin();
            return playerScore++;
        } else if (playerSelection == 'rock' && computerSelection == 'paper'){
            outcomeLoss();
            return compScore++;
        } else if (playerSelection == 'paper' && computerSelection == 'rock'){
            outcomeWin();
            return playerScore++;
        } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
            outcomeLoss();
            return compScore++;
        } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
            outcomeWin();
            return playerScore++;
        } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
            outcomeLoss();
            return compScore++;
        } else if (playerSelection === computerSelection) {
            outcomeTie();
            return tieScore++;
        }
    }

    
    playRound(playerSelection, computerSelection);
    return totalRounds++;
} 


game();
game();
game();
game();
game();

if (playerScore > compScore){
    alert("You win! " + playerScore + " wins, " + compScore + " losses, " + tieScore + " ties.");
    console.log("You win! " + playerScore + " wins, " + compScore + " losses, " + tieScore + " ties.");
} else if (playerScore < compScore){
    alert("You lose! " + playerScore + " wins, " + compScore + " losses, " + tieScore + " ties.");
    console.log("You lose! " + playerScore + " wins, " + compScore + " losses, " + tieScore + " ties.");
} else if ( playerScore == compScore){
    alert("You tied! " + playerScore + " wins, " + compScore + " losses, " + tieScore + " ties.");
    console.log("You tied! " + playerScore + " wins, " + compScore + " losses, " + tieScore + " ties.");
};