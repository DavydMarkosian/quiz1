let q1 = document.getElementById('q1')
let q2 = document.getElementById('q2')
let q3 = document.getElementById('q3')
let q4 = document.getElementById('q4')
let q5 = document.getElementById('q5')

let arrayOfInputs = document.getElementsByTagName('input')


let btn = document.getElementById('btn')


btn.addEventListener('click', checkFn)

let result = 0

let div = document.createElement('div')
document.body.appendChild(div)

function checkFn() {
    result = 0
    div.innerText = ''
    if (q1.value === '4') {
        result++
    }
    if (q2.value === '4') {
        result++
    }
    if (q3.value === '12') {
        result++
    }
    if (q4.value === '2') {
        result++
    }
    if (q5.value === '21') {
        result++
    }

    div.innerText = `Correct answers : ${result} / 5`

    for (const input of arrayOfInputs) {
        input.value=''
    }

}






















