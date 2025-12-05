//variables for navigation
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let clickSound = new Audio;
clickSound.src = "sounds/start-game.wav";

//create navigation
button1.onclick = function() {
    clickSound.play();
    menu1.style.display = "none";
    //generation of the world
    CreateNewWorld();
    //TimerGame = setInterval(update,10);
    canlock = true;
}

button2.onclick = function() {
    clickSound.play();
    menu1.style.display = "none";
    menu2.style.display = "flex";
    menu3.style.display = "none";
}

button3.onclick = function() {
    clickSound.play();
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "flex";
}

button4.onclick = function() {
    clickSound.play();
    menu1.style.display = "flex";
    menu2.style.display = "none";
    menu3.style.display = "none";
}

button5.onclick = button4.onclick;