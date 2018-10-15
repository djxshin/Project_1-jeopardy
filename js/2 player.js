let dollar = document.querySelector("#dollar");
let zeroDollar = 0;
// how much we need to take away or add from score
let score = 0;
// score value that stays

let question = document.querySelector("#question");
// player 2 ID section setting variable 
let zeroCount = 0;
// counter for how many questions were answered
let counter = 0;
// value that adds up the zerocount = 1 value;
let Player2 = 0;
// player 2 beggining zero value;

let alertP = document.querySelector('#alert')

$(".modal-btn").on("click", function() {
  // .modal-btn which = classes for all 25 Q buttons; class onlick function

  if ($(this).hasClass("hundred")) {
    // if the button clicked aka (this) is '.hundred' class;

    zeroDollar = 100;
    // let zeroDollar value is 100;
  } else if ($(this).hasClass("twoHundred")) {
    zeroDollar = 200;
  } else if ($(this).hasClass("threeHundred")) {
    zeroDollar = 300;
  } else if ($(this).hasClass("fourHundred")) {
    zeroDollar = 400;
  } else if ($(this).hasClass("fiveHundred")) {
    zeroDollar = 500;
  }
});

$(".modal-footer button").on("click", function() {
   // ".modal-footer button" = buttons inside the modal, onlick fucntion
  if ($(this).hasClass("btn-primary")) {
    zeroCount = 1;
  }

  counter += zeroCount;

  if ($(this).attr("data-attribute") == "right" && counter % 2 == 1) {
    // if these buttons = data attribute = right is a odd number we add 100pts to player 1
    score += zeroDollar;
  } else if ($(this).attr("data-attribute") == "wrong" && counter % 2 == 1) {
    //  // if these buttons = data attribute = right is a odd number we subtract 100pts to player 1
    score -= zeroDollar;
  } else if ($(this).attr("data-attribute") == "right" && counter % 2 == 0) {
     // if these buttons = data attribute = right is a even number we add 100pts to player 1
    Player2 += zeroDollar
  } else {
     // if these buttons = data attribute = right is a even number we subtrat 100pts to player 1
    Player2 -= zeroDollar
  }
  dollar.innerHTML = score;
  // each time you click it'll update innerHTML whether right or wrong for player 1
  count.innerHTML = Player2;
  // each time you click it'll update innerHTML whether right or wrong for player 2

  if (dollar.innerHTML < 0) {
    swal(
      "Player1  you reached negative points 😕  no worries, you can continue playing but please be more cautious with your answers"
     // sweet alert when the points go below zero for player 1 innerHTML
      );
  }
  if (count.innerHTML < 0) {
    swal(
      "Player2  you reached negative points 😕  no worries, you can continue playing but please be more cautious with your answers"
        // sweet alert when the points go below zero for player 2 innerHTML
      );
  }

  if (counter > 19) {
    //  sweet alert when all 20 questions are answered and shows the final score
    if (dollar.innerHTML > count.innerHTML){
      swal("player 1 is the winner!!!")
    }
    if (dollar.innerHTML < count.innerHTML){
      swal("player 2 is the winner!!!")
    }
  }
  
  if (counter % 2 == 1) {
    alertP.innerHTML = " Player 2 You're up!"
    // showing on innerHTML who's turn it is 
  }else {
    alertP.innerHTML = " Player 1 You're up!"
     // showing on innerHTML who's turn it is 
  }

  // traverse (moving up the dom tree to find closet .modal class)
  // neighbor elements 
  var gooey = $(this)
    .closest(".modal")
    .prev();
  // then find prevous element which is the main button
  gooey.css({
    opacity: "0",
    transition: "2000ms"
  });
  gooey.removeAttr("data-toggle");
});

