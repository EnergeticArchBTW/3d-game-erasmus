mapArray[0] = [
    //X,Y,Z, RX, RY, RZ, Width, Height, C
    [0, 0, -1000, 0, 0, 0, 2000, 200, wall], //front wall
    [0, 0, 1000, 0, 0, 0, 2000, 200, wall], //back wall
    [1000, 0, 0, 0, 90, 0, 2000, 200, wall, 0.5], //right wall
    [-1000, 0, 0, 0, -90, 0, 2000, 200, wall, 0.5], //left wall
    [0, 100, 0, 90, 0, 0, 2000, 2000, "Patterns/dirt_top.jpeg"], //ground

    [0,0,-1000,0,0,0,83,180,"Patterns/door_resized.jpg"],

    //cube
    [0, 0, -100, 0, 0, 0, 200, 200, "#0cea13ff"], //front wall
    [0, 0, 100, 0, 0, 0, 200, 200, "#0bcbdcff"], //back wall
    [100, 0, 0, 0, 90, 0, 200, 200, "#eb0804ff"], //right wall
    [-100, 0, 0, 0, -90, 0, 200, 200, "#5e08e9ff"], //left wall
    [0, 100, 0, 90, 0, 0, 200, 200, "#ef0d7eff"], //ground
    [0, -100, 0, 90, 0, 0, 200, 200, "#f4e508ff"], //roof

    //cube #2
    [250, 0, 400, 0, 0, 0, 200, 200, "#0cea13ff"], //front wall
    [312.5, 0, 600, 0, 0, 0, 75, 200, "#0bcbdcff"], //back wall
    [186.5, 0, 600, 0, 0, 0, 75, 200, "rgb(21, 206, 116)"], //back wall
    [350, 0, 500, 0, 90, 0, 200, 200, "#eb0804ff"], //right wall
    [150, 0, 500, 0, -90, 0, 200, 200, "#5e08e9ff"], //left wall
    [250, 100, 500, 90, 0, 0, 200, 200, "#ef0d7eff"], //ground
    [250, 0, 500, -90, 200, 0, 200, 200, "rgb(239, 156, 13)"], //ground
    [250, 0, 500, 90, 100, 0, 200, 200, "rgb(72, 3, 20)"], //ground
    [250, -100, 500, 90, 0, 0, 200, 200, "#f4e508ff"], //roof

    //tunnel
    [-300, 0, 0, 0, 0, 0, 200, 200, "#0cea13ff"], //front wall
    [-237.5, 0, 600, 0, 0, 0, 75, 200, "#0bcbdcff"], //back wall
    [-363.5, 0, 600, 0, 0, 0, 75, 200, "rgb(21, 206, 116)"], //back wall
    [-200, 0, 300, 0, 90, 0, 600, 200, "#eb0804ff"], //right wall
    [-400, 0, 300, 0, -90, 0, 600, 200, "#5e08e9ff"], //left wall
    [250, 100, 500, 90, 0, 0, 200, 200, "#ef0d7eff"], //ground
    [-300, -100, 300, 90, 0, 90, 600, 200, "#f4e508ff"], //roof

    //walls for maze
    [350, 0, 0, 0, 0, 0, 500, 200, "Patterns/brick_wall.jpg"],
    [600, 0, 0, 0, 90, 0, 1600, 200, "Patterns/brick_wall.jpg"],
    [0, 0, -800, 0, 0, 0, 1200, 200, "Patterns/brick_wall.jpg"],
    [-600, 0, -200, 0, 90, 0, 1200, 200, "Patterns/brick_wall.jpg"],
    [-350, 0, -200, 0, -90, 0, 1200, 200, "Patterns/brick_wall.jpg"],
    [-100, 0, -300, 0, -90, 0, 400, 200, "Patterns/brick_wall.jpg"],
    [100, 0, -500, 0, 0, 0, 400, 200, "Patterns/brick_wall.jpg"],
    [0, 0, 250, 0, 90, 0, 300, 200, "Patterns/brick_wall.jpg"],
    [0, 0, 800, 0, 0, 0, 1200, 200, "Patterns/brick_wall.jpg"],
    [-800, 0, -200, 0, 90, 0, 1200, 200, "Patterns/brick_wall.jpg"],
    [-700, -100, -200, 90, 0, 90, 1200, 200, "Patterns/brick_wall.jpg"],
    [-700, 0, 400, 0, 0, 0, 200, 200, "Patterns/brick_wall.jpg"],
    [-700, 0, -800, 0, 0, 0, 200, 200, "Patterns/brick_wall.jpg"],
];

finishArray[0] = [
    [900, 100, -900, 90, 0, 0, 320, 320, "Patterns/portal.gif"]
];

startArray[0] = [
    [-900, 0, -900, 0, 0]
];

coinsArray[0] = [
    [450,40,-500,0,0,0,50,50,coin_texture, 50, 20],
    [-200,40,600,0,0,0,50,50,coin_texture, 50, 20],
    [-200,40,-200,0,0,0,50,50,coin_texture, 50, 20],
    [-300,40,100,0,0,0,50,50,coin_texture, 50, 20],
]

keysArray[0] = [
    [900, 40, 900,0,0,0,50,50,"Patterns/red_coin.svg", 50]
]
