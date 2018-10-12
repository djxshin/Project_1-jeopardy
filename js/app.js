let dollar = document.querySelector("#dollar")
let zeroDollar = 0
// 1Q variables ID=#box6
let A = document.querySelector("#A")
let B = document.querySelector("#B")
let C = document.querySelector("#C")
let D = document.querySelector("#D")


C.addEventListener('click', function(){
    zeroDollar += 10
    dollar.innerHTML = zeroDollar
    document.getElementsByClassName("btn")[0].style.opacity = "0"
    document.getElementsByClassName("btn")[0].style.transition = "2s"
})

