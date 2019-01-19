const cards = document.querySelectorAll('.card');

let flippedCard = false;
let stopFlip = false;
let firstCard, secondCard;

function flipCard() {
    if (stopFlip) return;
    this.classList.add('flip');

    if(!flippedCard) {
        //first click
        flippedCard = true;
        firstCard = this;

        return;

    }
    //Second click
    flippedCard = false;
    secondCard = this;

    checkMatch();
}

function checkMatch(){
    //Check to see if cards match
    let isMatch =  firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? matchedCard() : flipCardBack();
}

function matchedCard() {
//Match
firstCard.removeEventListener("click", flipCard);
secondCard.removeEventListener("click", flipCard);
}

function flipCardBack(){
    //Not a match
    stopFlip = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip"); 
        stopFlip = false;
    }, 700);
}

cards.forEach(square => square.addEventListener('click', flipCard));