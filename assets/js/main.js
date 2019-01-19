const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if(!flippedCard) {
        //first click
        flippedCard = true;
        firstCard = this;
    } else {
        //Second click
        flippedCard = false;
        secondCard = this;

        if(firstCard.dataset.image === secondCard.dataset.image) {
            //Match
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
        } else {
            //Not a match
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip"); 
            }, 700);
        }
    }
}

cards.forEach(square => square.addEventListener('click', flipCard));