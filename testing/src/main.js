const cards = document.querySelectorAll('.card'); //Lists my cards in a const

let flippedCard = false; //First card has been clicked on users turn. This has the value of false because this is the first card.
let stopFlip = false; //Stops other cards flipping over whilst other cards are flipping over
let firstCard, secondCard;
let noMatches = 0;
let gameWon = 0;

function flipCard() {
    if (stopFlip) return;
    if (this === firstCard) return; //This stops user from double clicking on the same card and removing the event listener
    //Once clicked on the second card this will match up with the first card
    this.classList.add('flip'); //On click this will add the style class 'flip'

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
    //Check to see if cards match using the individual data attributes added to the index page by using a ternary operator
    //If the first image matches the second image then it is a match
    let isMatch =  firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? matchedCard() : flipCardBack();
}

//If cards match then the event listner will be taken away to prevent them from being clicked again
function matchedCard() {
    firstCard.removeEventListener("click", flipCard); 
    secondCard.removeEventListener("click", flipCard);
    fieldReset();
    //I have added in a rule to allow the user to win a game by creating an IF statement and a jQuery for a win.
    //Once all 6 pairs have been revealed it will add my "new-field-win class". 
    gameWon += 1;
    if(gameWon === 6) {
        $(document).ready(function(){
            $('.card').hide();
            $('.game-field').addClass("new-field-win").append('<p class="condition">You Win - The Communists have been captured!</p>');
        });
    }
}

//If it is not a match the cards will flip back around
//The set timeout will allow the user to see what two cards they have clicked and then rotate back
function flipCardBack(){
    stopFlip = true; //This stops the cards getting flipped whilst other cards are flipping over
    setTimeout(() => {
        firstCard.classList.remove("flip"); //This will remove the 'flip' class
        secondCard.classList.remove("flip"); 
        fieldReset();
    }, 700);
    //I have added in a rule if the user was to lose a game by creating an IF statement and a jQuery for a loss.
    //If you have 8 no matches in one game it will add my "new-field-lose class". 
    noMatches += 1;
    if(noMatches === 8) {
        $(document).ready(function(){
            $('.card').hide();
            $('.game-field').addClass("new-field-lose").append(`<p class="condition">You Lose - The Communists have escaped!</p>`);
        });
    }
}

//Whether the user has clicked on a match or not this allows the user to click on another 2 x cards after their first turn
function fieldReset(){
    [flippedCard, stopFlip] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//Creating a shuffle function each time the page is loaded
//I have added brackets around all of the function to shuffle the cards before the game starts 
(function shuffleSelection() {
    cards.forEach(square => {
        let randomSelection = Math.floor(Math.random() * 12);
        square.style.order = randomSelection;
    });
})();

cards.forEach(square => square.addEventListener('click', flipCard)); /*Adding an event listner for each 
                                                                    card when clicked. When a card is clicked this
                                                                    will activate the function 'flipCard'*/