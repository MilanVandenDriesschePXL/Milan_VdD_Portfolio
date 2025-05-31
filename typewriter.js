const words = [" Graphic Designer", "Web Developer", "UI Designer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 120; // typing speed
const eraseSpeed = 60;
const delayBetweenWords = 1500; // pause at end of word

const typewriterText = document.querySelector(".typewriter-text");

function type() {
    currentWord = words[i];
    if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, j--);
    } else {
        typewriterText.textContent = currentWord.substring(0, j++);
    }

    let currentSpeed = isDeleting ? eraseSpeed : speed;

    if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true;
        currentSpeed = delayBetweenWords;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        currentSpeed = 500;
    }

    setTimeout(type, currentSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});