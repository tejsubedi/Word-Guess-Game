// Jquery for starting the page

// $(document).ready(() => {
//     const $mainButton = $('.main-button');
//     const $navButton = $('.navbutton');
//     const $winLoose = $('.win-loose');

//     $mainButton.hide();
    

//     $navButton.on('click', () => {
//         $mainButton.show();
//         $navButton.hide();
//         $winLoose.hide();
//     })

// })

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


const myAnimals = ['Tiger', 'Elephant', 'Dog', 'Horse', 'Zebra','Rhinoceros','Deer', 'Buffalo', 'Ziraf','Lion'];
let winCounter = 0;
let loss = 0;
let wrongLetter = [];
let guessesLeft = 9;
let underScore = [];
let userGuesses = [];
let randWord ;


function startGame(){
    randWord = myAnimals[Math.floor(Math.random() * myAnimals.length)];

    for(let i= 0; i <randWord.length; i++){
        underScore.push('_');
    }
    console.log(randWord);
    document.getElementById('underscore').textContent = underScore.join(" ");

    //reset
    wrongLetter = [];
    guessesLeft = 10;

    //HTML 
    document.getElementById('countnumber').textContent = guessesLeft;

}

function winLose(){
    if(winCounter === randWord.length){
        alert('Winner');
        startGame();

    }else if(guessesLeft === 0){
        alert('Losser');
        startGame();
    }
}
    
//user Guesses
    document.onkeyup = function(event){
        userGuesses = event.key;
        if(randWord.indexOf(userGuesses) > -1){
            for(let i = 0; i <randWord.length; i++){
                if(randWord[i] === userGuesses){
                    underScore[i] =userGuesses;
                    console.log(underScore);
                    winCounter++;
                    winLose();
                }
            }
            
        }else{
            wrongLetter.push(userGuesses);
            guessesLeft--;
            console.log(wrongLetter);
            winLose();
            
        }

        
    }



startGame();





