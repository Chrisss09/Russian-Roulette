const cards = document.querySelectorAll('.card'); //Lists my cards in a const

let flippedCard = false; // This is false because this is the first card.
let stopFlip = false; //Stops other cards flipping over whilst other cards are flipping over
let firstCard, secondCard;
let noMatches = 0;
let gameWon = 0;

function flipCard() {
    if (stopFlip) return;
    if (this === firstCard) return; 
    this.classList.add('flip'); 

    if(!flippedCard) {
        //The first click will be true
        flippedCard = true;
        firstCard = this;

        return; //If true then the return will stop here
    }
        //The second click is set to false
        flippedCard = false;
        secondCard = this;

        checkMatch(); //If false then this will use the IF function
}

function checkMatch(){
    let isMatch =  firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? matchedCard() : flipCardBack();
}

function matchedCard() {
    firstCard.removeEventListener("click", flipCard); 
    secondCard.removeEventListener("click", flipCard);
    fieldReset();
    gameWon += 1;
    if(gameWon === 6) {
        $(document).ready(function(){
            $('.card').hide();
            $('.game-field').addClass("new-field-win").append(`<p class="condition">You Win - The Communists have been captured!</p>`);
        });
    }
}

function flipCardBack(){
    stopFlip = true; 
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip"); 
        fieldReset();
    }, 700);
    // Player has 8 false moves
    noMatches += 1;
    if(noMatches === 8) {
        $(document).ready(function(){
            $('.card').hide();
            $('.game-field').addClass("new-field-lose").append(`<p class="condition">You Lose - The Communists have escaped!</p>`);
        });
    }
}

//Keep flipping after users turn
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

function resetButton() {
    location.reload();
}

var loader = document.getElementById("loader");

window.addEventListener("load", function(){
    loader.style.height = "100%";
    loader.style.width = "100%";
    loader.style.visibility = "hidden";
});