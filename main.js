'use strict';

let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn = document.querySelector('.btn')
let text = document.querySelector('.res')

let min, max

btn.addEventListener('click', () => {
    if (+inp1.value == '' || +inp2.value == '') {
        text.textContent = '?'
    } else {
        text.classList.add('move')
        getRandomArbitrary(min, max)
    }
})
  
text.addEventListener("animationend", AnimationHandler, false)
  
function AnimationHandler () {
    text.classList.remove('move')
}

function getRandomArbitrary(min, max) {
    min = +inp1.value
    max = +inp2.value
    return text.textContent = Math.floor(Math.random() * (max - min + 1) + min)
}

