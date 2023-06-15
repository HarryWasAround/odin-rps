/* A function that that randomly returns either "Rock", "Paper or "Scissors" using the Math.random() and Math.floor() 
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
console.log(getComputerChoice());
/* A function with two parameters (one that acts as the player's selection and another that acts as the computer's 
selection using the previous function) and that plays a single round of r-p-s and then logs a string in the console 
that shows the result of the round*/
/* A function that plays 5 rounds inside of it using the previous function and keeps score, as well as reporting the final results at the end*/