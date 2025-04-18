const carousel = document.querySelector('.carousel__list');
const cells = carousel.querySelectorAll('.carousel__cell');

const cellWidth = carousel.offsetWidth;
const cellHeight = carousel.offsetHeight;
const cellCount = cells.length; // Dynamically get number of cells
const theta = 360 / cellCount;
const radius = Math.round(cellHeight / 2 / Math.tan(Math.PI / cellCount));

let selectedIndex = 0;

function rotateCarousel() {
    const angle = theta * selectedIndex * -1;
    carousel.style.transform = `translateZ(${-radius}px) rotateX(${-angle}deg)`;

    const cellIndex = ((selectedIndex % cellCount) + cellCount) % cellCount;

    cells.forEach((cell, index) => {
        cell.classList.toggle('selected', index === cellIndex);
    });
}

function selectPrev() {
    selectedIndex--;
    rotateCarousel();
}

function selectNext() {
    selectedIndex++;
    rotateCarousel();
}

document.querySelector('.previous-button')?.addEventListener('click', selectPrev);
document.querySelector('.next-button')?.addEventListener('click', selectNext);

function initCarousel() {
    cells.forEach((cell, i) => {
        const cellAngle = theta * i;
        cell.style.transform = `rotateX(${-cellAngle}deg) translateZ(${radius}px)`;
    });

    rotateCarousel();
}
initCarousel();