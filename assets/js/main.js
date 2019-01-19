const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(square => square.addEventListener('click', flipCard));