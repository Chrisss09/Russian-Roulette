const cards = document.querySelectorAll('.card');

let flippedCard = false;
let stopFlip = false;
let firstCard, secondCard;

function flipCard() {
    if (stopFlip) return;
    if (this === firstCard) return;
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

fieldReset();
}

function flipCardBack(){
    //Not a match
    stopFlip = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip"); 
        fieldReset();
    }, 700);
}

function fieldReset(){
    [flippedCard, stopFlip] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleSelection() {
    cards.forEach(square => {
        let randomSelection = Math.floor(Math.random() * 12);
        square.style.order = randomSelection;
    });
})();

cards.forEach(square => square.addEventListener('click', flipCard));