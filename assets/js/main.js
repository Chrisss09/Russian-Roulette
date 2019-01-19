const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if(!flippedCard) {
        flippedCard = true;
        firstCard = this;
    } else {
        flippedCard = false;
        secondCard = this;

        console.log(firstCard.dataset.image);
        console.log(secondCard.dataset.image);
    }
}

cards.forEach(square => square.addEventListener('click', flipCard));