// Jquery for starting the page

// $(document).ready(() => {
//     const $mainButton = $('.main-button');
//     const $navButton = $('.navbutton');
//     const $winLoose = $('.win-loose');

//     $mainButton.hide();
    

//     $navButton.on('click', () => {
//         $mainButton.show();
//         $navButton.hide();
//         //$winLoose.hide();  
//     })
// })

//const myAnimals = ['Tiger', 'Elephant', 'Dog', 'Horse', 'Zebra','Rhinoceros','Deer', 'Buffalo', 'Ziraf','Lion'];
const myAnimals = [{name: "Tiger", image:"assets/images/mytiger.jpeg"},
                    {name: "Elephant", image:"assets/images/mytiger.jpeg"},
                    {name: "Dog", image:"assets/images/mytiger.jpeg"},
                    {name: "Horse", image:"assets/images/mytiger.jpeg"},
                    {name: "Zebra", image:"assets/images/mytiger.jpeg"},
                    {name: "Rhinoceros", image:"assets/images/mytiger.jpeg"},
                    {name: "Deer", image:"assets/images/mytiger.jpeg"},
                    {name: "Buffalo", image:"assets/images/mytiger.jpeg"},
                    {name: "Ziraf", image:"assets/images/mytiger.jpeg"},
                    {name: "Lion", image:"assets/images/mytiger.jpeg"}
                  ]

// let randomNum = Math.floor(Math.random() * myAnimals1.length);
// console.log(randomNum);
// console.log(myAnimals1[randomNum].image);

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
    randWord = Math.floor(Math.random() * myAnimals.length);
    randWord = myAnimals[randWord].name;
    randWord = randWord.toLowerCase();
    console.log(randWord);

    for(let i= 0; i <randWord.length; i++){
        underScore.push('_');
    }
    document.getElementById('underscore').textContent = underScore.join(" ");

    //user Guesses

    document.onkeypress = function(event){
        userGuesses = event.key.toLowerCase();
        if(randWord.indexOf(userGuesses) > -1){
            for(let i = 0; i <randWord.length; i++){
                if(randWord[i] === userGuesses){
                    underScore[i] =userGuesses;
                    //console.log(userGuesses);
                    document.getElementById('underscore').textContent = underScore.join(" ");
                    document.getElementById('rightchoice').textContent = underScore.join(" ");
                    winLose();
                    ++winCounter;
                }
                
            }
            
        }else{
            wrongLetter.push(userGuesses);

            if(guessesLeft >= 0){
                
            document.getElementById('countnumber').textContent = guessesLeft;
            guessesLeft--;
            }
            document.getElementById('wrongchoice').textContent = wrongLetter.join(" ");
            winLose(); 
        }
    }

    //Reset
    

    //HTML 
    document.getElementById('countnumber').textContent = guessesLeft;
    document.getElementById('yourscore').textContent = yourScore;
    document.getElementById('computerscore').textContent = computerScore;


}

startGame();

//wincounter

function winLose(){
    if(winCounter === randWord.length){
        document.getElementById('winner').innerHTML = "You win !!!";
        document.getElementById('myImg').src ="./assets/images/animal.png";
        yourScore++;
        document.getElementById('yourscore').innerHTML = yourScore;

    }else if(guessesLeft <= 0){
        document.getElementById('looser').innerHTML = "You loose (:";
        ++computerScore;
        document.getElementById('computerscore').innerHTML = computerScore;
        
    }
}
    


    




