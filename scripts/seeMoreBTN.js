const BODY = document.querySelector('body');
const SEE_M = document.querySelectorAll('section.services div.services div.content div.box span.link');
const BOXES = document.querySelectorAll('section.services div.services div.boxes div.box');
const CONTAINER = document.querySelector('section.services div.services div.boxes');

for (let i = 0; i < SEE_M.length; i++) {
    const element = SEE_M[i];
    
    element.addEventListener('click', () => {
        CONTAINER.classList.add('active');
        BOXES[i].classList.add('active');
        BODY.style.overflow = 'hidden';
    });
}

CONTAINER.addEventListener('click', () => {
    if (CONTAINER.classList.contains('active')) {
        CONTAINER.classList.remove('active');
        BOXES.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
        BODY.style.overflow = 'auto';
    }
});
