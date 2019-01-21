const cards = document.querySelectorAll('.card'); //Store my cards in a const

let flippedCard = false;
let stopFlip = false; //Stops cards flipping over whilst other cards are flipping over
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
    //Check to see if cards match using the individual data tags added to the index page
    let isMatch =  firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? matchedCard() : flipCardBack();
}

//If cards match then the event listner will be taken away to prevent them from being clicked
function matchedCard() {
firstCard.removeEventListener("click", flipCard);
secondCard.removeEventListener("click", flipCard);

fieldReset();
}

//If it is not a match the cards will flip back around
function flipCardBack(){
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

cards.forEach(square => square.addEventListener('click', flipCard)); /*Adding an event listner for each 
                                                                    card when clicked. When a card is clicked this
                                                                    will activate the function 'flipCard'*/

function resetButton() {
    location.reload();
}

//-------WIP---------------------------------

$(document).ready(function(){

    $(".card").on("click", function(){
        var changeToSpecificName = $(this).val("#");
        $(".name-box").text(changeToSpecificName);
    });

});

//-----------------------------------------------

//----Created a loading page using a gif for when the user resets the game

var loader = document.getElementById("loader");

window.addEventListener("load", function(){
    loader.style.height = "100%";
    loader.style.width = "100%";
    loader.style.visibility = "hidden";
});