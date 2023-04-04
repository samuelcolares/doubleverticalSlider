const btnUp = document.querySelector('.up')
const btnDown = document.querySelector('.down')
const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const slides = document.querySelectorAll('.slide')
const leftslide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')


if (window.innerHeight <= window.innerWidth) {
    rightSlide.style.transform = `translateY(-${(slides.length - 1) * window.innerHeight}px)`
} else if (window.innerHeight > window.innerWidth) {
    rightSlide.style.transform = `translateX(-${(slides.length - 1) * window.innerWidth}px)`
}
// rightSlide.style.top = `-${(slides.length - 1) * 100}vh`
const x = (slides.length - 1) * window.innerHeight
const xxy = (slides.length - 1) * window.innerWidth // 3 * 390 = 1170
let counter = 0
btnUp.addEventListener('click', () => {
    sliding('up')
})
btnDown.addEventListener('click', () => {
    sliding('down')
})

function sliding(direction) {

    const sliderHeight = window.innerHeight
    if (direction === 'up') {
        counter++
        if (counter > slides.length - 1) {
            counter = 0
        }
    } else if (direction === 'down') {
        counter--
        if (counter < 0) {
            counter = slides.length - 1
        }
    }

    rightSlide.style.transform = `translateY(${counter * sliderHeight}px)`
    leftslide.style.transform = `translateY(${-((counter * sliderHeight) - x)}px)`
}

window.addEventListener(`keydown`, (e) => {
    if (e.key === `ArrowUp`) {
        sliding('up')
    } else if (e.key === `ArrowDown`) {
        sliding('down')
    }
})
let countM = 0
function slidingMobile(direction) {
    
    const sliderWidth = window.innerWidth
    if (direction === 'left') {
        counter++
        if (counter > slides.length - 1) {
            counter = 0
        }
    } else if (direction === 'right') {
        counter--
        if (counter < 0) {
            counter = slides.length - 1
        }
    }
    rightSlide.style.transform = `translateX(-${counter * sliderWidth}px)`
    leftslide.style.transform = `translateX(${(counter * sliderWidth) - xxy}px)`
}

btnLeft.addEventListener('click', () => {
    slidingMobile('left')
})
btnRight.addEventListener('click', () => {
    slidingMobile('right')
})