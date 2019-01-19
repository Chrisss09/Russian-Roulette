const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if(!flippedCard) {
        flippedCard = true;
        firstCard = this;
    
        console.log({flippedCard, firstCard});
    }
}

cards.forEach(square => square.addEventListener('click', flipCard));