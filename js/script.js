const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')
const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0


if (window.innerHeight <= window.innerWidth) {
    slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
} else if (window.innerHeight > window.innerWidth) {
    slideLeft.style.left = `-${(slidesLength - 1) * 100}vw`
}




upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
leftButton.addEventListener('click', () => changeSlideMobile('left'))
rightButton.addEventListener('click', () => changeSlideMobile('right'))


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


const changeSlideMobile = (direction) => {
    const sliderWidth = sliderContainer.clientWidth
    if(direction === 'right') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'left') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateX(-${activeSlideIndex * sliderWidth}px)`
    slideLeft.style.transform = `translateX(${activeSlideIndex * sliderWidth}px)`
}


