const sliderImages = document.querySelectorAll('.slider-container img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderDots = document.querySelector('.slider-dots');
let currentImage = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.remove('active');
    }
    for (let i = 0; i < sliderDots.children.length; i++) {
        sliderDots.children[i].classList.remove('active');
    }
}

function startSlide() {
    reset();
    sliderImages[currentImage].classList.add('active');
    sliderDots.children[currentImage].classList.add('active');
}

function slideLeft() {
    reset();
    currentImage--;
    if (currentImage < 0) {
        currentImage = sliderImages.length - 1;
    }
    sliderImages[currentImage].classList.add('active');
    sliderDots.children[currentImage].classList.add('active');
}

function slideRight() {
    reset();
    currentImage++;
    if (currentImage >= sliderImages.length) {
        currentImage = 0;
    }
    sliderImages[currentImage].classList.add('active');
    sliderDots.children[currentImage].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    slideLeft();
});

nextBtn.addEventListener('click', () => {
    slideRight();
});

for (let i = 0; i < sliderImages.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('slider-dot');
    sliderDots.appendChild(dot);
    dot.addEventListener('click', () => {
        reset();
        currentImage = i;
        sliderImages[currentImage].classList.add('active');
        sliderDots.children[currentImage].classList.add('active');
    })
}

startSlide();

setInterval(() => {
    slideRight();
}, 3000);

