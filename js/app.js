let dollar = document.querySelector("#dollar")
let zeroDollar = 0
// how much we need to take away or add from score
let score= 0
// score value that stays

// 1Q variables ID=#box6
let A = document.querySelector("#A")
let B = document.querySelector("#B")
let C = document.querySelector("#C")
let D = document.querySelector("#D")


$('.modal-btn').on('click', function(){
// .modal-btn which = classes for all 25 Q buttons; class onlick function
    
    if ($(this).hasClass('hundred')){
        // if the button clicked aka (this) is '.hundred' class;
        console.log('yea this is hundred')
        zeroDollar = 100;
        // let zeroDollar value is 100;
   
    } else if ($(this).hasClass('twoHundred')){
        console.log('yea this is 2hundred')
        zeroDollar = 200;
   
    }else if ($(this).hasClass('threeHundred')){
        console.log('yea this is 3hundred')
        zeroDollar = 300;
   
    }else if ($(this).hasClass('fourHundred')){
        console.log('yea this is 4hundred')
        zeroDollar = 400;
   
    }else if ($(this).hasClass('fiveHundred')){
        console.log('yea this is 5hundred')
        zeroDollar = 500;
   
    }
})

$('modal-btn').on('click', function() {
    if ($(this).hasClass('hundred')){
        zeroDollar = 100;
    }
})




$('.modal-footer button').on('click', function(){
    if ($(this).attr('data-attribute') == "right"){
        // if these buttons = data attribute = right, we add 100pts
        score += zeroDollar
       
    }
    else{
        // if else you would -100;
        score -= zeroDollar
    }
    
    dollar.innerHTML = score
    // each time you click it'll update innerHTML whether right or wrong

    // traverse (moving up the dom tree to find closet .modal class)
    var gooey = $(this).closest('.modal').prev()
    // then find prevous element which is the main button
    gooey.css({
        'opacity':'0',
        'transition': '2000ms'
    })
    gooey.removeAttr('data-toggle');
})


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
