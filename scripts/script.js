function player(x,y,z,rx,ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

//variables for movement
let PressLeft = 0;
let PressRight = 0;
let PressForward = 0;
let PressBack = 0;
let PressUp = 0;

//if the key is pressed
document.addEventListener("keydown", (event) => {
    if (event.key == "w" ||
        event.key == "ArrowUp"
    ) {
        PressForward = 1;
    }
    if(event.key == "s" ||
        event.key == "ArrowDown") {
        PressBack = 1;
    }
    if (event.key == "d" ||
        event.key == "ArrowRight") {
        PressRight = 1;
    }
    if (event.key == "a" ||
        event.key == "ArrowLeft") {
        PressLeft = 1;
    }
    if(event.key == 32) {
        PressUp = 1;
    }
    if(event.code === 'Space') {
        console.log("siema");
    }
})

//if the key is released
document.addEventListener("keyup", (event) => {
    if (event.key == "w" ||
        event.key == "ArrowUp") {
        PressForward = 0;
    }
    if(event.key == "s" ||
        event.key == "ArrowDown") {
        PressBack = 0;
    }
    if (event.key == "d" ||
        event.key == "ArrowRight") {
        PressRight = 0;
    }
    if (event.key == "a" ||
        event.key == "ArrowLeft") {
        PressLeft = 0;
    }
    if(event.key == 32) {
        PressUp = 0;
    }
})

const pawn = new player(0,0,0,0,0);
const world = document.getElementById(
    "world"
);

/*let isJump = 0;
function jump() {
    if(isJump == 0) {
        isJump = 1;

        for(let i = 0; i<10; ++i) {

        }

        isJump = 0;
    }
}*/

function update() {
    //count movement
    dx = PressRight - PressLeft;
    dz = PressBack - PressForward;
    dy = PressUp;

    //add movement to the coordinates
    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    pawn.z = pawn.z + dz;

    //change coordinates of the world
    world.style.transform = "translate3d(" 
    + (-pawn.x) + "px," + (-pawn.y) + "px," 
    + (-pawn.z) + "px)";

    //change coordinates of the square
    // it will be something here...

    requestAnimationFrame(update);
}

update();