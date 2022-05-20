const road = document.getElementById('road')
const line = document.getElementById('line')
const carRed = document.getElementById('car__red')
const carWhite = document.getElementById('car__white')
const startGame = document.getElementById('start__game')
const mask = document.getElementById('mask')
const levelsBlock = document.getElementById('levels__block')
const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')
const gameOver = document.getElementById('gameOver')


const carWhiteRandom = null

startGame.onclick = function startGameAnimateCar() {
    startGame.style.display = 'none'
    levelsBlock.style.display = 'block'
}

easy.onclick = function btnOnClick() {
    carWhite.animate([
        { transform: 'translateY(-400px) rotate(-90deg)' },
        { transform: 'translateY(1000px) rotate(-90deg)' },
    ], {
        duration: 2000,
        delay: 2000,
        iterations: Infinity
    })
    setInterval(function carWhiteRandomFunc() {
        const carWhiteRandom = Math.floor(Math.random() * 2)
        if (carWhiteRandom === 1) {
            carWhite.style.right = '55%'
        } else if (carWhiteRandom === 0) {
            carWhite.style.right = '5%'
        }
        return carWhiteRandom
    }, 2000);
    let arrow = document.onkeydown = function () {
        if (event.keyCode == 39) {
            carRed.style.transform = 'translateX(380px) rotate(-90deg)'
        } else if (event.keyCode == 37) {
            carRed.style.transform = 'translateX(0px) rotate(-90deg)'
        }
    }
    mask.style.opacity = 0
    levelsBlock.style.opacity = 0
    road.style.zIndex = 200
}

medium.onclick = function btnOnClick() {
    carWhite.animate([
        { transform: 'translateY(-400px) rotate(-90deg)' },
        { transform: 'translateY(1000px) rotate(-90deg)' },
    ], {
        duration: 1000,
        delay: 2000,
        iterations: Infinity
    })
    setInterval(function carWhiteRandomFunc() {
        const carWhiteRandom = Math.floor(Math.random() * 2)
        if (carWhiteRandom === 1) {
            carWhite.style.right = '55%'
        } else if (carWhiteRandom === 0) {
            carWhite.style.right = '5%'
        }
        return carWhiteRandom
    }, 1000);
    let arrow = document.onkeydown = function () {
        if (event.keyCode == 39) {
            carRed.style.transform = 'translateX(380px) rotate(-90deg)'
        } else if (event.keyCode == 37) {
            carRed.style.transform = 'translateX(0px) rotate(-90deg)'
        }
    }
    mask.style.opacity = 0
    levelsBlock.style.opacity = 0
    road.style.zIndex = 200
}

hard.onclick = function btnOnClick() {
    carWhite.animate([
        { transform: 'translateY(-400px) rotate(-90deg)' },
        { transform: 'translateY(1000px) rotate(-90deg)' },
    ], {
        duration: 500,
        delay: 2000,
        iterations: Infinity
    })
    setInterval(function carWhiteRandomFunc() {
        const carWhiteRandom = Math.floor(Math.random() * 2)
        if (carWhiteRandom === 1) {
            carWhite.style.right = '55%'
        } else if (carWhiteRandom === 0) {
            carWhite.style.right = '5%'
        }
        return carWhiteRandom
    }, 500);
    document.onkeydown = function () {
        if (event.keyCode == 39) {
            carRed.style.transform = 'translateX(380px) rotate(-90deg)'
        } else if (event.keyCode == 37) {
            carRed.style.transform = 'translateX(0px) rotate(-90deg)'
        }
    }
    mask.style.opacity = 0
    levelsBlock.style.opacity = 0
    road.style.zIndex = 200
}

setInterval(() => {
    let carRedTop = carRed.getBoundingClientRect().top
    let carRedLeft = carRed.getBoundingClientRect().left
    let carWhiteLeft = carWhite.getBoundingClientRect().left
    let carWhiteBottom = carWhite.getBoundingClientRect().top
    if (carWhiteBottom > carRedTop && carRedLeft === 695.9921875 && carWhiteLeft === 696.0078125) {
        mask.style.transition = '0s'
        mask.style.opacity = 1
        mask.style.zIndex = 500
        gameOver.style.zIndex = 1000
        gameOver.style.opacity = 1
    } else if (carWhiteBottom > carRedTop && carRedLeft === 1075.9921875 && carWhiteLeft === 1074.0078125) {
        mask.style.transition = '0s'
        mask.style.opacity = 1
        mask.style.zIndex = 500
        gameOver.style.zIndex = 1000
        gameOver.style.opacity = 1
        
    }
}, 100);

// 1075.9921875 696.0078125
// 695.9921875 1074.0078125

