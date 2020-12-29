'use strict';

const container = document.querySelector('.body__image--container');
const arrowLeft = document.querySelector('.slider__button--left');
const arrowRight = document.querySelector('.slider__button--right');
const dots = document.querySelectorAll('.fa-circle');
const tittle = document.querySelector('.tittle');
const images = document.querySelectorAll('img');
let currentSlide = 0;
const slideSize = 800;

let imageArray = ['Trees', 'Lake', 'Jungle', 'Bubble', 'North'];
const slides = imageArray.length;


const slidePictureFunction = () => {
    container.style.transform = `translateX(-${currentSlide * slideSize}px)`;
}

const nextPictureFUnction = () => {
    currentSlide = currentSlide >= slides -1 ? 0 : currentSlide + 1;
    slidePictureFunction();
    showTittle();
}

const previousPictureFUnction = () => {
    currentSlide = currentSlide <= 0 ? slides -1 : currentSlide -1;
    slidePictureFunction();
    showTittle();
}

const imageSelect = () => dots.forEach((element, index) => element.addEventListener('click', () => container.style.transform = `translateX(-${index * slideSize}px)`));




//Ez így nem oké még. 
  const showTittle = () => {
    let images = {
        0 : 'Trees',
        1 : 'Lake',
        2 : 'Jungle',
        3 : 'Bubble',
        4 : 'North',
    };

    tittle.textContent = images[currentSlide];
};  



imageSelect();
arrowLeft.addEventListener('click', previousPictureFUnction);
arrowRight.addEventListener('click', nextPictureFUnction); 

