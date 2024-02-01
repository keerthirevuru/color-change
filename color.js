const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'yellow', 'purple', 'blue', 'pink', 'oreng', 'gry']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeB)
function changeB() {
    console.log("click")
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}