//variables for navigation
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let clickSound = new Audio;

let points = 0;
let c = [0];
let k = [0];
let score = 0;

//create navigation
//start game
button1.onclick = function() {
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

function iteration(squares, string, num) {
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
            num[0]++;
            console.log("item: ",num,"coins: ", c[0], "keys: ",k[0]);
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
            console.log("Please find the key");
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
            console.log("score is ", score);
        }
    }
}

function repeatForever() {
    update();
    iteration(coins, "coin",c);
    iteration(keys, "key",k);
    finishIteration();
}