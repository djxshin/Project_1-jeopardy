
const inputHold = document.getElementById("inputHold");
const catagoryName = document.getElementById("catagoryName");
const playerLives  = document.getElementById('playerLives')
const correctGuess = [];
const word;
const lives;
const choices = [
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z"
];



var alphabetChoices = function () {
    let alphabetButtons = document.getElementById("buttons");
    listABC = document.createElement('ul')

    for( let i=0; i< choices.length; i++){
       listABC.setAttribute('id', 'abc')
    // The <ul> thats holding the <li> items will = the id of ‘Alphabet’
        var list = document.createElement('button')
    // We are adding the <div> to the dom
        list.setAttribute('id', 'singleLetter')
    // Alphabet array i[0] through i[25]  = singleLetter
        list.innerHTML = choices[i]
    // This actually lists i[0]-i[25] (a-z)  in the individual innerHTML in ID = letter
        // buttonClick();
        alphabetButtons.appendChild(listABC)
        // put the alphaButtons function (which is the actual buttons) into the ul 
        listABC.appendChild(list)
        // adding the alphabets into the buttons of the unordered list 
    }
}

alphabetChoices()

check = function(event){
    
    list.onclick = function(){
    // <li> = choices[i]   onclick function
      event.preventDefault()
    //   prevent constant refresh
      var printInner = (this.innerHTML)
    // = “#singleLetter”[i] innerHTML  this onclick function’s innerHTML
      this.setAttribute('class', 'active')
    //   Each click adds class attribute with the value of “active”  into the <li>
    this.onclick = null
    // This prevents selecting the same letter button twice, so that you don’t waste additional turn
        for(let i=0; i<word.length; i++){
        if (word[i] = printInner){
    // If the (word = selected guess = answer[i] = clicked choices (aka alphabet array)
        correctGuess[i].innerHTML = printInner
        // Guesses array innerHTML = guess alphabet, whatever you guess correct goes into the empty array
        }
        }
        var matchLetter = (word.indexOf(printInner))
        if (matchLetter = -1 ){
            lives -= 1
         }
    }
}

