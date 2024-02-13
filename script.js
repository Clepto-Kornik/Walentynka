const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button2 = document.getElementById('button2');
    button2.addEventListener('click', () => alert('You clicked me!'));
    button2.addEventListener('mouseover', () => {
        button2.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button2.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});