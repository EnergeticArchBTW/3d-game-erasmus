//variables for navigation
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let clickSound = new Audio;
let points = 0;

//create navigation
//start game
button1.onclick = function() {
    clickSound.src = "Sounds/start-game.wav";
    clickSound.play();
    menu1.style.display = "none";
    //generation of the world
    CreateNewWorld();
    createSquares(coins, "coin");
    createSquares(keys, "key");
    TimerGame = setInterval(repeatForever,15);
    canlock = true;
}

//instructions
button2.onclick = function() {
    clickSound.src = "Sounds/instructions.wav";
    clickSound.play();
    menu1.style.display = "none";
    menu2.style.display = "flex";
    menu3.style.display = "none";
}

//rules
button3.onclick = function() {
    clickSound.src = "Sounds/instructions.wav";
    clickSound.play();
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "flex";
}

//go back to main maenu
button4.onclick = function() {
    clickSound.src = "Sounds/instructions.wav";
    clickSound.play();
    menu1.style.display = "flex";
    menu2.style.display = "none";
    menu3.style.display = "none";
}

button5.onclick = button4.onclick;

function iteration(squares, string) {
    for(let i = 0; i < squares.length; i++) {
        let r = (squares[i][0] - pawn.x)**2 +
        (squares[i][1] - pawn.y)**2 +
        (squares[i][2] - pawn.z)**2;
        let r1 = squares[i][6]**2;
        if(r < r1) {
            clickSound.src = "Sounds/collect_coin.mp3";
            clickSound.play();
            document.getElementById(string + i)
            .style.display = "none";
            squares[i][0] = 1000000;
            squares[i][1] = 1000000;
            squares[i][2] = 1000000;
            document.getElementById(string + i).remove();
            points++;
        }
        if(points >= 4) {
            alert("You collected all coins! Congratulations!");
            PressForward = 0;
            PressSpeed = 0;
            points = 0;
            menu1.style.display = "flex";
            menu2.style.display = "none";
            menu3.style.display = "none";
            clearInterval(TimerGame);
        }
    }
}

function repeatForever() {
    update();
    iteration(coins, "coin");
    iteration(keys, "key");
}