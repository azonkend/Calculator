let screen = 0
let num1 = undefined
let num2 = undefined
let equal = undefined
let sign = undefined
let btn = document.querySelectorAll('.btn')
let p = document.querySelector('p')

btn.addEventListener('click', () => {
    screen += 1
    p.innerText = `${screen}`
})