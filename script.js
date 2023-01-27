let score = document.querySelector('#score')
let button = document.querySelector('#clicker')
let achivement = document.querySelector('.clicker__achievement')
let header = document.querySelector('.clicker__header')
let text = document.querySelector('.clicker__text')

button.addEventListener('click', function () {
    button.textContent = ' '

    onclick = score.textContent++
    if (score.textContent == 1) {
        achivementOn()
        window.setTimeout(achivementOff,2000)
        header.textContent = 'First Click!'
        text.textContent = 'you made first click!'
    }
    if (score.textContent == 10) {
        achivementOn()
        window.setTimeout(achivementOff,2000)
        header.textContent = 'First 10 clicks!'
        text.textContent = 'congrats! you have unlocked the first piece of circle'
        this.style.borderTopLeftRadius = '50%'
    }
    if (score.textContent == 20) {
        this.style.borderTopRightRadius = '50%'
    }
    if (score.textContent == 30) {
        this.style.borderBottomLeftRadius = '50%'
    }
    if (score.textContent == 40) {
        achivementOn()
        window.setTimeout(achivementOff,2000)
        header.textContent = 'A circle'
        text.textContent = 'you made a circle from square!'
        this.style.borderBottomRightRadius = '50%'
        this.style.backgroundColor = 'purple'
        window.setTimeout(colorOut,2000)
        
    }
    if (score.textContent == 50) {
        achivementOn()
        window.setTimeout(achivementOff,2000)
        header.textContent = 'color!'
        text.textContent = 'congrats! you have color on your circle'
        let color = prompt('choose your border-color', 'color')
        let brown = button.style.borderColor = 'brown'
        let red = button.style.borderColor = 'red'
        let blue = button.style.borderColor = 'blue'
        let black = button.style.borderColor = 'black'
        let green = button.style.borderColor = 'green'
        ariphmetic(color, brown, red, blue, black, green)
    }
    if (score.textContent == 100){
        achivementOn()
        window.setTimeout(achivementOff,2000)
        header.textContent = '100 clicks!!!'
        text.textContent = 'congrats! you have clicked 100 times!!!'
        this.style.backgroundColor = 'yellow'
        window.setTimeout(colorOut,2000)
        
    }
})

function ariphmetic(operator) {
    let result = 0

    if (operator === 'brown') {
        result = button.style.borderColor = 'brown'
    } else if (operator === 'green') {
        result = button.style.borderColor = 'green'
    } else if (operator === 'red') {
        result = button.style.borderColor = 'red'
    } else if (operator === 'blue') {
        result = button.style.borderColor = 'blue'
    } else if (operator === 'black') {
        result = button.style.borderColor = 'black'
    }
    else {
        result = alert('i did not add this color,sorry');
        result = button.style.borderColor = 'transparent'
        header.textContent = '????'
        text.textContent = 'you did something worng,and you have unlocked secret achivement'
    }

}
function achivementOn() {
    achivement.style.opacity = '1'
    achivement.style.transform = 'translateY(0px)'
}
function achivementOff() {   
    achivement.style.opacity = '0'
    achivement.style.transform = 'translateY(50px)'
}
function colorOut(){
    button.style.backgroundColor = 'gainsboro'
}