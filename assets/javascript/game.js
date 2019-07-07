
const myAnimals = [{ name: "Tiger", image: "assets/images/mytiger.jpeg" },
{ name: "Elephant", image: "assets/images/myElephant.jpg" },
{ name: "Dog", image: "assets/images/myDog.jpeg" },
{ name: "Horse", image: "assets/images/myHorse.jpeg" },
{ name: "Zebra", image: "assets/images/myZebra.jpg" },
{ name: "Rhinoceros", image: "assets/images/myRhino.jpg" },
{ name: "Deer", image: "assets/images/myDeer.jpg" },
{ name: "Buffalo", image: "assets/images/myBuffalo.jpeg" },
{ name: "Ziraf", image: "assets/images/myZiraf.jpg" },
{ name: "Lion", image: "assets/images/myLion.jpg" }
]

let winCounter = 0;
let loss = 0;
let wrongLetter = [];
let guessesLeft = 9;
let underScore = [];
let userGuesses = [];
let randWord;
let yourScore = 0;
let computerScore = 0;
let numOfAttempts = 4;
let rightWord = [];
let randomImage;
let randNum;



function startGame() {
    randNum = Math.floor(Math.random() * myAnimals.length);
    randWord = myAnimals[randNum].name;
    randomImage = myAnimals[randNum].image;
    randWord = randWord.toLowerCase();
    console.log(randWord);
    for (let i = 0; i < randWord.length; i++) {
        underScore.push('_');
    }
    document.getElementById('underscore').textContent = underScore.join(" ");
    //HTML 
    document.getElementById('countnumber').textContent = guessesLeft;
    document.getElementById('yourscore').textContent = yourScore;

}


let clickMe = document.getElementById('clickMe');
clickMe.addEventListener('click', function () {
    location.reload(true);
});


function winLose() {
    if (winCounter === randWord.length) {
        document.getElementById('winner').innerHTML = "You win !!!";
        document.getElementById('myImg').src = randomImage;
        yourScore++;
        document.getElementById('yourscore').innerHTML = yourScore;

    } else if (guessesLeft <= 0) {
        document.getElementById('looser').innerHTML = "You loose (:";

    }
}


//user Guesses
document.onkeypress = function (event) {
    userGuesses = event.key.toLowerCase();
    console.log(userGuesses);
    if (randWord.indexOf(userGuesses) > -1) {
        for (let i = 0; i < randWord.length; i++) {
            if (randWord[i] === userGuesses) {
                underScore[i] = userGuesses;
                document.getElementById('underscore').textContent = underScore.join(" ");
                document.getElementById('rightchoice').textContent = underScore.join(" ");

                winLose();
                ++winCounter;
            }

        }

    } else {
        wrongLetter.push(userGuesses);
        if (guessesLeft >= 0) {
            guessesLeft--;
            document.getElementById('countnumber').textContent = guessesLeft;

        }
        document.getElementById('wrongchoice').textContent = wrongLetter.join(" ");
        winLose();
    }
}

startGame();
