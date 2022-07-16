let computerScore=0;
let playerScore=0;
function computerPlay (){
    array = ["rock", "paper", "scissors"];
    return array[Math.floor((Math.random()*3))];
}

const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('div');
div.textContent='glorious content...';
div.style.marginTop='20px';

body.appendChild(div);

function singleRound (){
    let computerChoice = computerPlay();

    if (computerChoice==playerChoice){
        div.textContent="You have both picked "+ playerChoice+ " It's a tie";
        auxScore=0;
      
    } else if (computerChoice=="rock" && playerChoice=="scissors"){
        computerScore++;
        div.textContent=`You Lose! Rock beats scissors; score is: Player: ${playerScore} to ${computerScore}`;
    } else if (computerChoice=="rock" && playerChoice=="paper"){
        playerScore++
        div.textContent=`You Win! Paper beats rock; score is: Player: ${playerScore} to ${computerScore}`;
        
    } else if (computerChoice=="paper" && playerChoice=="scissors"){
        playerScore++
        div.textContent=`You win! Scissors beats paper; score is: Player: ${playerScore} to ${computerScore}`;
        
    } else if (computerChoice=="paper" && playerChoice=="rock"){
        computerScore++;
        div.textContent=`You lose! Paper beats rock; score is: Player: ${playerScore} to ${computerScore}`;
        
    } else if (computerChoice=="scissors" && playerChoice=="rock"){
        playerScore++
        div.textContent=`You win! Rock beats scissors; score is: Player: ${playerScore} to ${computerScore}`;
        
    } else if (computerChoice=="scissors" && playerChoice=="paper"){
        computerScore++;
        div.textContent=`You lose! Scissors beats paper; score is: Player: ${playerScore} to ${computerScore}`;
        
    }
    
    if (computerScore == 5 || playerScore == 5){
        if (computerScore> playerScore){
            div.textContent="Sorry, you lost "+computerScore+" to "+playerScore;
        } else {
            div.textContent=`Congrats, you WON ${playerScore} to ${computerScore}`
        }
        computerScore=0;
        playerScore=0;
    }
}

let playerChoice=null;
const select = document.querySelectorAll('button');
select.forEach(i => i.addEventListener('click', function(e){
    playerChoice = i.getAttribute('class');
        singleRound();
    
}))

    
        
    
    
    
    


