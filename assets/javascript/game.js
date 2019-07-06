// Jquery for starting the page

$(document).ready(() => {
    const $mainButton = $('.main-button');
    const $navButton = $('.navbutton');
    const $winLoose = $('.win-loose');

    $mainButton.hide();
    

    $navButton.on('click', () => {
        $mainButton.show();
        $navButton.hide();
        //$winLoose.hide();
    })

})

const myAnimals = ['Tiger', 'Elephant', 'Dog', 'Horse', 'Zebra','Rhinoceros','Deer', 'Buffalo', 'Ziraf','Lion'];
let winCounter = 0;
let loss = 0;
let wrongLetter = [];
let guessesLeft = 9;
let underScore = [];
let userGuesses = [];
let randWord ;
let yourScore = 0;
let computerScore = 0;
let numOfAttempts = 4;
let rightLetter = [];



function startGame(){
    randWord = myAnimals[Math.floor(Math.random() * myAnimals.length)];
    randWord = randWord.toLowerCase();

    for(let i= 0; i <randWord.length; i++){
        underScore.push('_');
    }
    console.log(randWord);
    document.getElementById('underscore').textContent = underScore.join(" ");

    
    //HTML 
    document.getElementById('countnumber').textContent = guessesLeft;
    document.getElementById('yourscore').textContent = yourScore;
    document.getElementById('computerscore').textContent = computerScore;

     

}


//wincounter

function winLose(){
    if(winCounter === randWord.length){
        document.getElementById('winner').innerHTML = "You win !!!";
        yourScore++;
        document.getElementById('yourscore').innerHTML = yourScore;

    }else if(guessesLeft === 0){
        document.getElementById('looser').innerHTML = "You loose (:";
        computerScore++;
        document.getElementById('computerscore').innerHTML = computerScore;
        
    }
}
    
//user Guesses

    document.onkeypress = function(event){
        userGuesses = event.key.toLowerCase();
        if(randWord.indexOf(userGuesses) > -1){
            for(let i = 0; i <randWord.length; i++){
                if(randWord[i] === userGuesses){
                    underScore[i] =userGuesses;
                    console.log(underScore);
                    document.getElementById('underscore').textContent = underScore.join(" ");
                    document.getElementById('rightchoice').textContent = underScore.join(" ");
                    winLose();
                    winCounter++;
                }
                
            }
            
        }else{
            wrongLetter.push(userGuesses);
            if(guessesLeft != 0){
                guessesLeft--;
            document.getElementById('countnumber').textContent = guessesLeft;
            }
            document.getElementById('wrongchoice').textContent = wrongLetter.join(" ");
            winLose();
            
        }
    }

    
startGame();



