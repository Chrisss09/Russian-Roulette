//Created a function to use for a reset button
function resetButton() {
    location.reload();
}

//----Created a loading page using a gif for when the user resets the game

var loader = document.getElementById("loader");

window.addEventListener("load", function(){
    loader.style.height = "100%";
    loader.style.width = "100%";
    loader.style.visibility = "hidden";
});