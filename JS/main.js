"use strict"

let button = document.querySelector(".btn")
let answers = document.querySelectorAll(".answ")


let falseAnsw = document.querySelectorAll('.false')
let output = document.querySelector(".output")
let container = document.querySelector('.container')
let count = '0'
let results = document.querySelector('.results')

function isTrue () {
    answers.forEach(answ =>{
        if(answ.checked && answ.classList.contains('true')) {

           count++
          
        }
    })
   output.style.display = 'block'
   results.innerHTML= `You got ${count} from 5`
   container.style.display = 'none'
   count = '0'
}


let close = document.querySelector('.close')

function toClose(){
    output.style.display = 'none'
    container.style.display = 'flex'
}

close.addEventListener ('click', toClose)

button.addEventListener( 'click', isTrue)


