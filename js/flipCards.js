const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => card.addEventListener('click', toggleFlip));

function toggleFlip(event) {
    event.target.classList.toggle('flip');
}