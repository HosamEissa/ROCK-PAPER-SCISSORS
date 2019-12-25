function computerPlay() {
    let choice = Math.floor(Math.random() * 3)
    return !choice ? "Rock" : choice == 1 ? "Paper" : "Scissors";
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    }
    let res = true;
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Paper") {
                res = false;
            }
            break;
        case "Paper":
            if (computerSelection == "Scissors") {
                res = false;
            }
            break;
        case "Scissors":
            if (computerSelection == "Rock") {
                res = false;
            }
            break;
    }
    return res;
}
let computerScore=0;
let playerScore=0;
function game(playerSelection) {
    let computerSelection=computerPlay();
    let res=playRound(playerSelection,computerSelection);
    res?playerScore++:computerScore++;
    let RoundResult=res=='draw'?'Draw':res?"You won this round":"Computer won this round"
    const result=document.querySelector('#result');
    const resulttext=result.firstElementChild;
    const player=resulttext.nextElementSibling;
    const comp=player.nextElementSibling;
    resulttext.textContent=`Round result : ${RoundResult}`
    player.textContent=`player score : ${playerScore}`;
    comp.textContent=`computer score: ${computerScore}`;
    if(Math.max(playerScore,computerScore)>=5){
        winner=playerScore>computerScore?"player won":"computer won";
        const win=document.createElement('h1');
        win.textContent=winner;
        result.appendChild(win);
        let again=alert('press ok to play again')
       
        computerScore=0;
        playerScore=0;
        RoundResult='no winner yet';
        resulttext.textContent=`Round result : ${RoundResult}`
        player.textContent=`player score : ${playerScore}`;
        comp.textContent=`computer score: ${computerScore}`;
        result.removeChild(win);
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors= document.querySelector('#scissors');
rock.addEventListener('click',() => game('Rock'));
paper.addEventListener('click',() => game('Paper'));
scissors.addEventListener('click',() => game('Scissors'));