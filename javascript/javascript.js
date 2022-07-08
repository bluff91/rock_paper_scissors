var auxScore=0;
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
        alert("You have given the wrong  input")
        auxScore=0;
    }
}

function singleRound (){
    let computerChoice = computerPlay();
    let playerChoice = playerSelection();

    if (computerChoice==playerChoice){
        alert("You have both picked "+ playerChoice+ " It's a tie");
        auxScore=0;
      
    } else if (computerChoice=="rock" && playerChoice=="scissors"){
        alert("You Lose! Rock beats scissors");
        auxScore = -1;
    } else if (computerChoice=="rock" && playerChoice=="paper"){
        alert("You Win! Paper beats rock");
        auxScore = 1;
    } else if (computerChoice=="paper" && playerChoice=="scissors"){
        alert("You win! Scissors beats paper");
        auxScore = 1;
    } else if (computerChoice=="paper" && playerChoice=="rock"){
        alert("You lose! Paper beats rock");
        auxScore = -1;
    } else if (computerChoice=="scissors" && playerChoice=="rock"){
        alert("You win! Rock beats scissors");
        auxScore = +1;
    } else if (computerChoice=="scissors" && playerChoice=="paper"){
        alert("You lose! Scissors beats paper");
        auxScore = -1;
    }
    
    
}

function game (){
    let scorePlayer=0;
    let scoreComputer=0;
    for (let i=0; i<5; i++){
        singleRound()
        
        if (auxScore===1){
            scorePlayer=scorePlayer+1;  
        } else if(auxScore===-1){
            scoreComputer=scoreComputer+1; 
        } else if (auxScore===0){
            scorePlayer=scorePlayer+0;
            scoreComputer=scoreComputer+0;
        }
    }
    console.log("after 5 games, the score is: computer:"+scoreComputer+" and player: "+scorePlayer);
    if (scorePlayer > scoreComputer){
        alert("Congratulations, you won "+scorePlayer+" to "+scoreComputer);
    } else if (scorePlayer < scoreComputer) {
        alert("Sorry, you lost "+scorePlayer+" to "+scoreComputer);
    } else {
        alert("It's a tie !")
    }
}
game();