const duck = document.querySelector('.duck')
const bomb = document.querySelector('.bomb')

const jump = () => {
    duck.classList.add('jump');

    setTimeout(() => {
        duck.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
    const bombPosition = bomb.offsetLeft;
    const duckPosition = +window.getComputedStyle(duck).bottom.replace('px', '');

    console.log(duckPosition);

    if(bombPosition <= 130 && bombPosition > 0 && duckPosition < 80) {

        bomb.style.animation = 'none';
        bomb.style.left = `${bombPosition}px`;

        duck.style.animation = 'none';
        duck.style.bottom = `${duckPosition}px`;

        bomb.src = './images/game-over.png';
        bomb.style.bottom = '-20px';
        bomb.style.width = '400px';
        duck.style.width = '1px';

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump)