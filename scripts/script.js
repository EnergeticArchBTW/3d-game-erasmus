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
let PressSpace = 0;

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
        PressSpace = 1;
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
    if(event.code === 'Space') {
        PressSpace = 0;
    }
})

const pawn = new player(0,0,0,0,0);
const square = new player(0,0,0,0,0);
const world = document.getElementById(
    "world"
);

//is jump at the moment?
let isJump = 0;
let height = 0;
//direction of the jump
let JumpUp = 1;
const maxHeightOfJump = 20;

/*one execution of the function
is one tick of jump, so ju must
execute this on update() function*/
function jump() {
    if((PressSpace || isJump) &&
        (isJump == 0 ||
        (isJump == 1 && height >= 0))
    ) {
        isJump = 1;

        if(height < maxHeightOfJump && JumpUp == 1) {
            height++;
        }
        if(height > 0 && JumpUp == 0) {
            height--;
        }
        if(height == maxHeightOfJump) {
            JumpUp = 0;
        }
        //reset state
        if(height == 0 && JumpUp == 0) {
            JumpUp = 1;
            isJump = 0;
        }

        world.style.top = ((height*10) + 0) + "px";
    }
}

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

    //one tick for jump
    jump();

    requestAnimationFrame(update);
}

update();