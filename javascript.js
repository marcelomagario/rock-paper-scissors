
function computerPlay(options) {
    return options[Math.floor(Math.random() * options.length)]
};


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return ("Draw round!")
    } else if  
    ((playerSelection == "Rock" && computerSelection == "Paper")||
    (playerSelection == "Paper" && computerSelection == "Scissors")||
    (playerSelection == "Scissors" && computerSelection == "Rock"))
    {
    return ("You lost!")
    } else if 
    ((playerSelection == "Rock" && computerSelection == "Scissors")||
    (playerSelection == "Paper" && computerSelection == "Rock")||
    (playerSelection == "Scissors" && computerSelection == "Paper"))
    {
    return ("You won!")
    } else {
    
    return ("Oppps! please, enter a valid option: Rock, Paper or Scissors only.")

    }
}

function capitalize(str) {

    return str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


// function game() {

// for (let i = 0; i < 5; i++) {

//     // ADD FUNCIONALITIES HERE
    
//     }
// }



// GAME 
const options = ['Rock', 'Paper', 'Scissors']

// debugger;
computerSelection = computerPlay(options)
varPrompt = prompt("Choose your hand")
playerSelection = capitalize(varPrompt)

console.log("Computer Hands= " + computerSelection)
console.log("resultado: " + playRound(playerSelection, computerSelection));
