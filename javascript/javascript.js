function computerPlay (){
    array = ["rock", "paper", "scissors"];
    return array[Math.floor((Math.random()*3))];
}

function playerSelection(){
    let text = window.prompt("Input your choice: rock / paper / scrissors");
    let newText = text.toLowerCase();
    if (newText==="rock"){
        return newText;
    } else if (newText==="paper"){
        return newText;
    } else if (newText==="scissors"){
        return newText; 
    } else {
        alert("You have given the wron input")
    }
}

function singleRound (){
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();
    if (computerChoice==playerChoice){
        alert("You have both picked "+ playerChoice+ " It's a tie");
    } else if (computerChoice=="rock" && playerChoice=="scissors"){
        alert("You Lose! Rock beats scissors");
    } else if (computerChoice=="rock" && playerChoice=="paper"){
        alert("You Win! Paper beats rock");
    } else if (computerChoice=="paper" && playerChoice=="scissors"){
        alert("You win! Scissors beats paper");
    } else if (computerChoice=="paper" && playerChoice=="rock"){
        alert("You lose! Paper beats rock");
    } else if (computerChoice=="scissors" && playerChoice=="rock"){
        alert("You win! Rock beats scissors");
    } else if (computerChoice=="scissors" && playerChoice=="paper"){
        alert("You lose! Scissors beats paper");
    }
}
singleRound();