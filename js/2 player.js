let dollar = document.querySelector("#dollar");
let zeroDollar = 0;
// how much we need to take away or add from score
let score = 0;
// score value that stays

let question = document.querySelector("#question");
let zeroCount = 0;
let counter = 0;
let Player2 = 0;

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
  if ($(this).hasClass("btn-primary")) {
    zeroCount = 1;
  }

  counter += zeroCount;

  


  if ($(this).attr("data-attribute") == "right" && counter % 2 == 1) {
    // if these buttons = data attribute = right, we add 100pts
    score += zeroDollar;
  } else if ($(this).attr("data-attribute") == "wrong" && counter % 2 == 1) {
    // if else you would -100;
    score -= zeroDollar;
  } else if ($(this).attr("data-attribute") == "right" && counter % 2 == 0) {
    Player2 += zeroDollar
  } else {
    Player2 -= zeroDollar
  }
  dollar.innerHTML = score;
  count.innerHTML = Player2;
  // each time you click it'll update innerHTML whether right or wrong

  if (dollar.innerHTML < 0) {
    swal(
      "Player1  you reached negative points 😕  no worries, you can continue playing but please be more cautious with your answers"
    );
  }
  if (count.innerHTML < 0) {
    swal(
      "Player2  you reached negative points 😕  no worries, you can continue playing but please be more cautious with your answers"
    );
  }

  if (counter > 19) {
    if (dollar.innerHTML > count.innerHTML){
      swal("player 1 is the winner!!!")
    }
    if (dollar.innerHTML < count.innerHTML){
      swal("player 2 is the winner!!!")
    }
  }
  
  if (counter % 2 == 1) {
    alertP.innerHTML = " Player 2 You're up!"
  }else {
    alertP.innerHTML = " Player 1 You're up!"
  }

  // traverse (moving up the dom tree to find closet .modal class)
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



// A.addEventListener('click', function(){
//     zeroDollar -= 100
//     dollar.innerHTML = zeroDollar
//     document.getElementsByClassName("btn")[0].style.opacity = "0"
//     document.getElementsByClassName("btn")[0].style.transition = "2s"

// })
// B.addEventListener('click', function(){
//     zeroDollar -= 100
//     dollar.innerHTML = zeroDollar
//     document.getElementsByClassName("btn")[0].style.opacity = "0"
//     document.getElementsByClassName("btn")[0].style.transition = "2s"

// })
// C.addEventListener('click', function(){
//     zeroDollar += 100
//     dollar.innerHTML = zeroDollar
//     document.getElementsByClassName("btn")[0].style.opacity = "0"
//     document.getElementsByClassName("btn")[0].style.transition = "2s"
//     document.getElementsByClassName("btn")[0].removeAttribute('data-toggle')
// })
// D.addEventListener('click', function(){
//     zeroDollar -= 100
//     dollar.innerHTML = zeroDollar
//     document.getElementsByClassName("btn")[0].style.opacity = "0"
//     document.getElementsByClassName("btn")[0].style.transition = "2s"

// })
