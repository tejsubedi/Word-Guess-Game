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
function reset(){
    //reset
    wrongLetter = [];
    guessesLeft;
    yourScore;
    computerScore;
}
/*
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode).toLowerCase();
    //  userGuesses.push(keyWord);
    // console.log(userGuesses);
    //  document.getElementById('underscore').textContent = userGuesses.join(" ");
    // console.log(userGuesses);

    if(randWord.indexOf(userGuesses) > -1){
        for(let i=0; i <randWord.length; i++){
            if(randWord[i] === userGuesses){
                underScore[i] = userGuesses;
                //console.log(underScore);
            }
        }
    }

    //if user guess is right
    // if (randWord.indexOf(keyWord) > -1) { 
    //     //replace the underscore with right keyword
    //     underScore[randWord.indexOf(keyWord)] = keyWord;
    //     domUnderScore[0].innerHTML = underScore.join(' ');
    //     domRightGuess[0].innerHTML = rightWord;

    //     //add to right words array
    //     rightWord.push(keyWord);

    //     //Checks to see if user word matches guesses
    //     if (underScore.concat(keyWord) === chooseAnimals) {
    //         domWinner.innerHTML = "You win !!!";
    //     };

    //     console.log(underScore);
    // } else {
    //     wrongWord.push(keyWord);
    //     domWrongGuess[0].innerHTML = wrongWord;
    //     domCountNumber.innerHTML = maxCount;
    //     maxCount--;
    //     console.log(wrongWord);
    // }

})
*/

//startGame();

/*
//Create an array of words
const myAnimals = ['Tiger', 'Elephant', 'Dog', 'Horse', 'Zebra','Rhinoceros','Deer', 'Buffalo', 'Ziraf','Lion'];

//choose words randomly
let randumNum = Math.floor(Math.random() * myAnimals.length);
let chooseAnimals = myAnimals[randumNum];


//Global variables
let rightWord = [];
let wrongWord = [];
let underScore = [];
let maxCount = 10;

//Testing
console.log(randumNum);



//DOM manipulation
let domUnderScore = document.getElementsByClassName('underscore');
let domRightGuess = document.getElementsByClassName('rightchoice');
let domWrongGuess = document.getElementsByClassName('wronguess');
let domCountNumber = document.getElementsByClassName('countnumber');
let domWinner = document.getElementById('winner');



console.log(chooseAnimals);
//create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chooseAnimals.length; i++) {
        underScore.push('_');
        
    }
    return underScore;
}

//Get users guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);

    //if user guess is right
    if (chooseAnimals.indexOf(keyWord) > -1) {
        
        //replace the underscore with right keyword
        underScore[chooseAnimals.indexOf(keyWord)] = keyWord;
        domUnderScore[0].innerHTML = underScore.join(' ');
        domRightGuess[0].innerHTML = rightWord;

        //add to right words array
        rightWord.push(keyWord);

        //Checks to see if user word matches guesses
        if (underScore.concat(keyWord) === chooseAnimals) {
            domWinner.innerHTML = "You win !!!";
        };

        console.log(underScore);
    } else {
        wrongWord.push(keyWord);
        domWrongGuess[0].innerHTML = wrongWord;
        domCountNumber.innerHTML = maxCount;
        maxCount--;
        console.log(wrongWord);
    }

})
console.log(generateUnderscore());

*/




function winLose(){
    if(winCounter === randWord.length){
        document.getElementById('winner').innerHTML = "You win !!!";
        //alert('Winner');
        yourScore++;
        document.getElementById('yourscore').innerHTML = yourScore;
       // startGame(reset());

    }else if(guessesLeft === 0){
        document.getElementById('looser').innerHTML = "You loose (:";
        computerScore++;
        document.getElementById('computerscore').innerHTML = computerScore;
        //alert('Losser');
       // startGame(reset());
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
                    winCounter++;
                    winLose();
                }
                
            }
            
        }else{
            wrongLetter.push(userGuesses);
            if(guessesLeft != 0){
                guessesLeft--;
            document.getElementById('countnumber').textContent = guessesLeft;
            }
        
            document.getElementById('wrongchoice').textContent = wrongLetter.join(" ");
            //console.log(wrongLetter);
            winLose();
            
        }
    }

    

startGame();



