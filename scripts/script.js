//world constant
var deg = Math.PI/180;

function player(x,y,z,rx,ry) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

let wall = "patterns/dirt_wall_resized.png"

//rectangle Array
let map = [
    //X,Y,Z, RX, RY, RZ, Width, Height, C
    [0, 0, -1000, 0, 0, 0, 2000, 200, wall], //front wall
    [0, 0, 1000, 0, 0, 0, 2000, 200, wall], //back wall
    [1000, 0, 0, 0, 90, 0, 2000, 200, wall, 0.5], //right wall
    [-1000, 0, 0, 0, -90, 0, 2000, 200, wall, 0.5], //left wall
    [0, 100, 0, 90, 0, 0, 2000, 2000, "patterns/dirt_top.jpeg"], //ground

    [0,0,-1000,0,0,0,83,180,"patterns/door_resized.jpg"],

    //cube
    [0, 0, -100, 0, 0, 0, 200, 200, "#0cea13ff"], //front wall
    [0, 0, 100, 0, 0, 0, 200, 200, "#0bcbdcff"], //back wall
    [100, 0, 0, 0, 90, 0, 200, 200, "#eb0804ff"], //right wall
    [-100, 0, 0, 0, -90, 0, 200, 200, "#5e08e9ff"], //left wall
    [0, 100, 0, 90, 0, 0, 200, 200, "#ef0d7eff"], //ground
    [0, -100, 0, 90, 0, 0, 200, 200, "#f4e508ff"], //roof

    //walls for maze
    [350, 0, 0, 0, 0, 0, 500, 200, "#0cea13ff"],
    [600, 0, 0, 0, 90, 0, 1600, 200, "#dfea0cff"],
    [0, 0, -800, 0, 0, 0, 1200, 200, "#0cd4eaff"],
    [-600, 0, -200, 0, 90, 0, 1200, 200, "#ea5a0cff"],
    [-350, 0, -200, 0, -90, 0, 1200, 200, "#5e08e9ff"],
    [-100, 0, -300, 0, -90, 0, 400, 200, "#f107b7ff"],
    [100, 0, -500, 0, 0, 0, 400, 200, "#0cea13ff"],
    [0, 0, 250, 0, 90, 0, 300, 200, "#eb0804ff"],
    [0, 0, 800, 0, 0, 0, 1200, 200, "#9cb209ff"],
    [-800, 0, -200, 0, 90, 0, 1200, 200, "#ea5a0cff"],
    [-700, -100, -200, 90, 0, 90, 1200, 200, "#1b0115ff"],
    [-700, 0, 400, 0, 0, 0, 200, 200, "#660515ff"],
    [-700, 0, -800, 0, 0, 0, 200, 200, "#13b72cff"],
]

//variables for movement
let PressLeft = 0;
let PressRight = 0;
let PressForward = 0;
let PressBack = 0;
let PressUp = 0;
let PressSpace = 0;
let MouseX = 0;
let MouseY = 0;
var lock = false;
let canlock = false;

//link vriable to container
var container = 
document.getElementById("container");
//if the mouse is pressed
container.onclick = function() {
    if(canlock)
    container.requestPointerLock();
}

//period between 2 clicks that powers on speed
const periodBetweenClicks = 11;
//timer for double click between two clicks
let clickTimer = periodBetweenClicks;
//speed click
let PressSpeed = 0;

//if the key is pressed
document.addEventListener("keydown", (event) => {
    if (event.key == "w" ||
        event.key == "ArrowUp"
    ) {
        PressForward = 1;

        if(clickTimer < periodBetweenClicks || event.ctrlKey) {
            console.log("speed");
            PressSpeed = 1;
        }
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
        PressSpeed = 0;
        clickTimer = 0;
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

//locked mouse listner
document.addEventListener("pointerlockchange",
    (event) => {
        lock = !lock;
    }
);

//mouse movement listener
document.addEventListener("mousemove", (event) => {
    MouseX = event.movementX;
    MouseY = event.movementY;
})

const pawn = new player(0,0,0,0,0);
const square = new player(0,0,0,0,0);
const world = document.getElementById(
    "world"
);

//is jump at the moment?
let isJump = 0;
//height of which jump lift
let height = 0;
//direction of the jump
let JumpUp = 1;
const maxHeightOfJump = 15;

/*one execution of the function
is one tick of jump, so ju must
execute this on update() function*/
function jump(dy) {
    if((PressSpace || isJump) &&
        (isJump == 0 ||
        (isJump == 1 && height >= 0))
    ) {
        isJump = 1;
        let result;

        if(height < maxHeightOfJump && JumpUp == 1) {
            height++;
            result = 1;
        }
        if(height > 0 && JumpUp == 0) {
            height--;
            result = -1;
        }
        if(height == maxHeightOfJump) {
            JumpUp = 0;
        }
        //reset state
        if(height == 0 && JumpUp == 0) {
            JumpUp = 1;
            isJump = 0;
        }

        return dy + (-result)*10;
    }
    return dy;
}


function update() {
    //count movement
    dx = Math.cos(pawn.ry * deg) * 
    (PressRight - PressLeft) - 
    Math.sin(pawn.ry * deg) * 
    (PressForward - PressBack);
    dz = - Math.sin(pawn.ry * deg) * 
    (PressRight - PressLeft) -
    Math.cos(pawn.ry * deg) * 
    (PressForward - PressBack);

    dy = PressUp;
    drx = MouseY/4;
    dry = - MouseX/4;
    MouseY = MouseX = 0;

    //one tick for jump
    dy = jump(dy);

    //add movement to the coordinates
    pawn.x = pawn.x + 4*dx + 16*PressSpeed*dx;
    pawn.y = pawn.y + 4*dy;
    pawn.z = pawn.z + 4*dz + 16*PressSpeed*dz;

    //if the mouse is locked
    if(lock) {
        pawn.rx = pawn.rx + drx;
        pawn.ry = pawn.ry + dry;
    }

    //update timer for cheking if this is double w
    if(clickTimer < periodBetweenClicks) {
        ++clickTimer;
    }

    //change coordinates of the world
    world.style.transform = 
    "translateZ(600px)" +
    "rotateX(" + (-pawn.rx) + "deg)" +
    "rotateY(" + (-pawn.ry) + "deg)" +
    "translate3d(" 
    + (-pawn.x) + "px," + (-pawn.y) + "px," 
    + (-pawn.z) + "px)";

    requestAnimationFrame(update);
}

function CreateNewWorld() {
    for (let i = 0; i < map.length; ++i) {
        // create rectangles and styles
        let newElement 
        = document.createElement("div");
        newElement.className = "square";
        newElement.id = "square" + i;
        newElement.style.width = map[i][6] + "px";
        newElement.style.height = map[i][7] + "px";
        newElement.style.background = map[i][8];
        newElement.style.backgroundImage =
        "url(" + map[i][8] + ")";
        newElement.style.opacity = map[i][9];
        newElement.style.transform = 
        "translate3d(" + 
        (600 - map[i][6]/2 + map[i][0]) + 
        "px," + (400 - map[i][7]/2 +
        map[i][1]) + "px," + 
        map[i][2] + "px)" +
        "rotateX(" + map[i][3] + "deg)" +
        "rotateY(" + map[i][4] + "deg)" +
        "rotateZ(" + map[i][5] + "deg)";

        //insert rectangles int the world
        world.append(newElement);
    }
}
//generate new world
CreateNewWorld();
update();