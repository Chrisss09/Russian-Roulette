const cards = document.querySelectorAll('.card');

function flipCard() {
    console.log("I am here");
    console.log(this);
}

cards.forEach(square => square.addEventListener('click', flipCard));