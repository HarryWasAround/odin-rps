//Initialize handy elements in the global scope.

let playerScore = 0;
let compScore = 0;
let playerChoice = "";
let computerChoice = "";

//Select, create and append elements to each other while storing each one in a variable.

const rock = document.createElement('button');
rock.classList.add('Rock');

const paper = document.createElement('button');
paper.classList.add('Paper');

const scissors = document.createElement('button');
scissors.classList.add('Scissors');


const container = document.createElement('div');
container.classList.add('container')


container.append(rock, paper, scissors);


const body = document.querySelector('body');
body.appendChild(container);


const results = document.createElement('div');
results.classList.add('results');


body.appendChild(results);

const btn = document.querySelectorAll('button');


const roundRes = document.querySelector('.roundRes');
roundRes.textContent = "Click the button below to start playing"


const start = document.querySelector('.start');
const score = document.querySelector('.score');


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


start.addEventListener('click', game, {
        once: false
});

/* A function with two parameters (one that acts as the player's selection and another that acts as the computer's 
selection using the previous function) and that plays a single round of r-p-s and then logs a string in the console 
that shows the result of the round*/

function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = playerChoice;
    computerChoice = computerSelection;
    if (playerSelection === computerSelection){
        ++compScore;
        ++playerScore;
        return roundRes.textContent = "It's a draw";
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        ++compScore;
        return roundRes.textContent = `You lose! Paper beats Rock`;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        ++playerScore;
        return roundRes.textContent = `You win! Paper beats Rock`;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        ++compScore;
        return roundRes.textContent = `You lose! Rock beats Scissors`;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){        
        ++playerScore;
        return roundRes.textContent = `You win! Rock beats Scissors`;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        ++playerScore;
        return roundRes.textContent = `You win! Scissors beat Paper`;
    }   
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        ++compScore;
        return roundRes.textContent = `You lose!  beat Paper`;
    } else{
        ++compScore;
        return roundRes.textContent = "Misimput!";
    }
}
/* A helper callback function that keeps score*/

//Actually, scratch that.

// Use the above-written code to run the game itself whle displaying the running score and the final results.

function game() {



        let updateSelection = (e) => {    

            playerChoice = e.target.className;
            playRound();
            score.textContent = `${playerScore}  /  ${compScore}`;
            
            if(playerScore === 5 || computerChoice === 5) {

                rock.removeEventListener('click', updateSelection, {
                    once: false
                });
        
                paper.removeEventListener('click', updateSelection, {
                    once: false
                });
        
                scissors.removeEventListener('click', updateSelection, {
                    once: false
                });

                roundRes.textContent = 'GAME OVER';
                if (playerScore < compScore){
                    return results.textContent = "You've lost ):";
                }
                else if (playerScore > compScore){
                    return results.textContent = "You've won! (:";
                }else {
                    return results.textContent = "TIE";
                } 
            }
        }
        
        rock.addEventListener('click', updateSelection, {
            once: false
        });

        paper.addEventListener('click', updateSelection, {
            once: false
        });

        scissors.addEventListener('click', updateSelection, {
            once: false
        });
    

}
