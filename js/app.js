
const inputHold = document.getElementById("inputHold");
const catagoryName = document.getElementById("catagoryName");
const playerLives  = document.getElementById('playerLives')
const answerArray = [];
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

const words = [
 "cat in the hat",
 "yoshi",
 "toad",
 "mario",
 "luigi",
 "princess peah"
];


var alphabetChoices = function () {
    let alphabetButtons = document.getElementById("buttons");
    listABC = document.createElement('ul')

    for( let i=0; i< choices.length; i++){
       listABC.setAttribute('id', 'abc')
    // The <ul> thats holding the <li> items will = the id of ‘Alphabet’
        var list = document.createElement('li')
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

