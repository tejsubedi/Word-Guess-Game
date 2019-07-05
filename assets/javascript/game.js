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
  //Testing
  console.log(randumNum);

  

  //DOM manipulation
  
  
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
        //Checks to see if user word matches guesses
        if(underScore.join('') === chooseAnimals){
            alert('You win');
        };

        console.log(underScore);
    }else {
        wrongWord.push(keyWord);

        console.log(wrongWord);
    }
    
})
console.log(generateUnderscore());
  

 
  



