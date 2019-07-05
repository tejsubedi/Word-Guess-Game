// Jquery for starting the page

$(document).ready(() => {
    const $mainButton = $('.main-button');
    const $navButton = $('.navbutton');

    $mainButton.hide();

    $navButton.on('click',() => {
        $mainButton.show();
        $navButton.hide();
    })
  })


//Create an array of words
  const myAnimals = ['Tiger', 'Elephant','Dog','Horse', 'Zebra'];
 
//choose words randomly
  let randumNum = Math.floor(Math.random() * myAnimals.length)
  let rightWord = [];
  let wrongWord = [];
  let chooseAnimals = myAnimals[randumNum];
  let underScore = [];
  let maxCount = 10;
  //Testing
  console.log(randumNum);

  

  //DOM manipulation
  let domUnderScore = document.getElementsByClassName('underscore');
  let domRightGuess = document.getElementsByClassName('rightchoice');
  let domWrongGuess = document.getElementsByClassName('wronguess');
  let domCountNumber = document.getElementsByClassName('countnumber');
  domCountNumber.innerHTML = "maxCount";

  
  
  console.log(chooseAnimals);
//create underscores based on length of word
let generateUnderscore = () => {
    for(let i=0; i <chooseAnimals.length; i++){
        underScore.push('_');
        
        
    }
    return underScore;
}

//Get users guess
document.addEventListener('keypress', (event) => {
    let keyWord = String.fromCharCode(event.keyCode);

    //if user guess is right
    if(chooseAnimals.indexOf(keyWord) > -1){
        //add to right words array
        rightWord.push(keyWord);
        
        //replace the underscore with right keyword
        underScore[chooseAnimals.indexOf(keyWord)] = keyWord;
        domUnderScore[0].innerHTML = underScore.join(' ');
        domRightGuess[0].innerHTML = rightWord;
        //Checks to see if user word matches guesses
        if(underScore.join('') === chooseAnimals){
            alert('You win');
        };

        console.log(underScore);
    }else {
        wrongWord.push(keyWord);
        domWrongGuess[0].innerHTML = wrongWord;
        console.log(wrongWord);
    }
    
})
console.log(generateUnderscore());
  

 
  



