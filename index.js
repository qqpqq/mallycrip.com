const moveArrow = (arrow) => {
    arrow.style.transform = "translateY(-5px)"
    setTimeout(() => {
        arrow.style.transform = "translateY(5px)"
    }, 500)
}

const startMoveArrow = () => {
    setInterval(() => {
        let arrow1 = document.getElementsByClassName("page__arrow")[0]
        let arrow2 = document.getElementsByClassName("page__arrow")[1]
        moveArrow(arrow1)
        moveArrow(arrow2)
    }, 1000)
}

let perviousTrans1X = -100
let perviousTrans1Y = -100
let perviousTrans2X = -100
let perviousTrans2Y = -50
let perviousTrans3X = -50
let perviousTrans3Y = -50
const moveElement = (x, y) => { 
    let element1 = document.getElementById("page__three__background__element__one")
    let element2 = document.getElementById("page__three__background__element__two")
    let element3 = document.getElementById("page__three__background__element__three")
    perviousTrans1X += x*0.1
    perviousTrans1Y += y*0.14
    perviousTrans2X += x*0.15
    perviousTrans2Y += y*0.12
    perviousTrans3X += x*0.13
    perviousTrans3Y += y*0.15

    element1.style.transform = `translateX(${perviousTrans1X}px) translateY(${perviousTrans1Y}px)`
    element2.style.transform = `translateX(${perviousTrans2X}px) translateY(${perviousTrans2Y}px)`
    element3.style.transform = `translateX(${perviousTrans3X}px) translateY(${perviousTrans3Y}px)`
}

window.onload = () => {
    startMoveArrow()
}

let perviousX = 0
let perviousY = 0
window.addEventListener('mousemove', () => {
    moveElement(window.event.clientX - perviousX, window.event.clientY - perviousY)
    perviousX = window.event.clientX
    perviousY = window.event.clientY
})