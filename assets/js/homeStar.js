const starsContainer = document.querySelector('.stars');
const numberOfStars = 200; // Altere este número conforme desejado

for(let i = 0; i < numberOfStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = `${Math.random() * 3}px`;
    starsContainer.appendChild(star);
}
