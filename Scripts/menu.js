//variables for navigation
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let menu4 = document.getElementById("menu4");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button6 = document.getElementById("button6");

// variables for widgets
let widget1 = document.getElementById("widget1");
let widget2 = document.getElementById("widget2");
let widget3 = document.getElementById("widget3");

let clickSound = new Audio;

let points = 0;
let c = [0];
let k = [0];
let score = 0;
let level = 0;

//create navigation
//start game
button1.onclick = function() {
    //copy of arrays
    map = makeCopy(mapArray[level]);
    coins = makeCopy(coinsArray[level]);
    keys = makeCopy(keysArray[level]);
    finish = makeCopy(finishArray[level]);
    start = makeCopy(startArray[level]);

    // create world and put items on the map
    pawn.x = start[0][0];
    pawn.y = start[0][1];
    pawn.z = start[0][2];
    pawn.rx = start[0][3];
    pawn.ry = start[0][4];
    clickSound.src = "Sounds/start-game.wav";
    clickSound.play();
    menu1.style.display = "none";
    //generation of the world
    CreateNewWorld();
    createSquares(coins, "coin");
    createSquares(keys, "key");
    createSquares(finish, "finish")

    //lunch the game
    widget1.style.display = "block";
    widget2.style.display = "block";
    widget1.innerHTML = "<p style='font-size: 50px'>Coins 0 of " + coins.length + "</p>";
    widget2.innerHTML = "<p style='font-size: 50px'>Keys 0 of " + keys.length + "</p>";
    widget3.innerHTML = "<p style='font-size: 35px'>Please find the key!</p>";

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
    canlock = false;
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

button6.onclick = function() {
    clickSound.src = "Sounds/instructions.wav";
    menu1.style.display = "flex";
    menu4.style.display = "none";
}

function makeCopy(array) {
    let NewArray = new Array();
    for(let i = 0; i < array.length; ++i) {
        NewArray[i] = new Array();
        for(let j = 0; j < array[i].length; ++j) {
            NewArray[i][j] = array[i][j];
        }
    }
    return NewArray;
}

function iteration(squares, string, num) {
    for(let i = 0; i < squares.length; i++) {
        let r = (squares[i][0] - pawn.x)**2 +
        (squares[i][1] - pawn.y)**2 +
        (squares[i][2] - pawn.z)**2;
        let r1 = squares[i][6]**2;
        if(r < r1) {
            clickSound.src = "Sounds/collect_coin.mp3";
            clickSound.play();

            widget3.innerHTML = "<p style='font-size: 35px'>You collected a coin !</p>"
            widget3.style.display = "block";
            setTimeout(() => widget3.style.display = "none", 5000);

            document.getElementById(string + i)
            .style.display = "none";
            squares[i][0] = 1000000;
            squares[i][1] = 1000000;
            squares[i][2] = 1000000;
            num[0]++;
            //console.log("item: ",num,"coins: ", c[0], "keys: ",k[0]);
            widget1.innerHTML = "<p style='font-size: 50px'>Coins " + c[0] + " of " + coins.length + "</p>";
            widget2.innerHTML = "<p style='font-size: 50px'>Keys " + k[0] + " of " + keys.length + "</p>";
            document.getElementById(string + i).remove();
            points[0]++;
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

function finishIteration() {
    let r = (finish[0][0] - pawn.x)**2 +
            (finish[0][1] - pawn.y)**2 +
            (finish[0][2] - pawn.z)**2;
    let r1 = finish[0][6]**2;
    if (r < r1) {
        if (k[0] == 0) {
            widget3.innerHTML = "<p style='font-size: 35px'>Please find the key first!</p>"
            widget3.style.display = "block";
            setTimeout(() => widget3.style.display = "none", 5000);
        }
        else {
            clearWorld();
            clearInterval(TimerGame);
            score = score + c[0];
            c[0] = 0;
            k[0] = 0;
            //menu1.style.display = "block";
            menu1.style.display = "flex";
            document.exitPointerLock();
            canLock = false;
            console.log("score is ", score);
            console.log("level is ", level);
            ++level;

            menu1.style.display = "none";
            menu4.style.display = "flex";
            document.getElementById("result").innerHTML = "Your score is " + score + " points";
            button1.innerHTML = "<p>Next level</p>";

            if (level == 2) {
                button1.innerHTML = "<p>Start new game</p>";
                level = 0;
                score = 0;
            }
        }
    }
}

function repeatForever() {
    update();
    iteration(coins, "coin",c);
    iteration(keys, "key",k);
    finishIteration();
}