let dollar = document.querySelector("#dollar");
let zeroDollar = 0;
// how much we need to take away or add from score
let score = 0;
// score value that stays

let question = document.querySelector('#question');
let zeroCount = 0;
let counter = 0;



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
  if ($(this).attr("data-attribute") == "right") {
    // if these buttons = data attribute = right, we add 100pts
    score += zeroDollar;
  } else {
    // if else you would -100;
    score -= zeroDollar;
  }

  dollar.innerHTML = score;
  // each time you click it'll update innerHTML whether right or wrong

  if($(this).hasClass('btn-primary')){
      zeroCount = 1;
     
  }

 counter += zeroCount
 
count.innerHTML = counter;

if(dollar.innerHTML < 0){
    swal("you reached negative points 😕  no worries, you can continue playing but please be more cautious with your answers")
}

if (count.innerHTML > 19){

   
    swal("That's the Game! Thank you for playing! your final score is " + dollar.innerHTML)
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
