alert("Open your console")
let playerScore = 0;
let compScore = 0;

/* A callback function that that randomly returns either "Rock", "Paper or "Scissors" using the Math.random() and Math.floor() 
methods as well as switch statements to display the right result in each of the 3 cases*/

function getComputerChoice(){
    const n = Math.floor(Math.random() * 3) +1

    switch (n){
        case 1:
            return "Rock"
            break;    
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
    }
}

/* A function with two parameters (one that acts as the player's selection and another that acts as the computer's 
selection using the previous function) and that plays a single round of r-p-s and then logs a string in the console 
that shows the result of the round*/

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();

    playerSelection = prompt("Rock, Paper, Scissors, Shoot!", "");

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection){
        ++compScore;
        ++playerScore;
        return "It's a draw";
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        ++compScore;
        return `You lose! Paper beats Rock`;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        ++playerScore;
        return `You win! Paper beats Rock`;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        ++compScore;
        return `You lose! Rock beats Scissors`;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){        
        ++playerScore;
        return `You win! Rock beats Scissors`;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        ++playerScore;
        return `You win! Scissors beat Paper`;
    }   
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        ++compScore;
        return `You lose!  beat Paper`;
    } else{
        ++compScore;
        return "Misimput!";
    }
}
/* A helper callback function that keeps score*/

//Actually, scratch that.


/* A function that plays 5 rounds inside of it using the previous function, as well as reporting the final results at the end*/

function game(){

    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    if (playerScore < compScore){
        return console.log("You've lost ):");
    }
    else if (playerScore > compScore){
        return console.log("You've won! (:");
    }else {
        return console.log("Please learn to type");
    } 
}
game();
