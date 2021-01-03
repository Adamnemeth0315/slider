'use strict';

const container = document.querySelector('.body__image--container');
const arrowLeft = document.querySelector('.slider__button--left');
const arrowRight = document.querySelector('.slider__button--right');
const dots = document.querySelectorAll('.fa-circle');
const tittle = document.querySelector('.tittle');
const images = document.querySelectorAll('img');
const imageCounter = document.querySelector('.image--counter');
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
    showTittle(currentSlide);
}

const previousPictureFUnction = () => {
    currentSlide = currentSlide <= 0 ? slides -1 : currentSlide -1;
    slidePictureFunction();
    showTittle(currentSlide);
}

const imageSelect = () => dots.forEach((element, index) => element.addEventListener('click', () =>{
    container.style.transform = `translateX(-${index * slideSize}px)`;
    showTittle(index);
}
 ));

  const imageCounterFunction = (counter) => {
    imageCounter.textContent = counter + 1;
 } 

  const showTittle = (counter) => {
    let images = {
        0 : 'Trees',
        1 : 'Lake',
        2 : 'Jungle',
        3 : 'Bubble',
        4 : 'North',
    };

    tittle.textContent = images[counter];
    imageCounterFunction(counter);
};  

imageCounterFunction(currentSlide);
showTittle(currentSlide);
imageSelect();
arrowLeft.addEventListener('click', previousPictureFUnction);
arrowRight.addEventListener('click', nextPictureFUnction); 

