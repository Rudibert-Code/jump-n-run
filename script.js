let canvas;
let level;
//let character = new Player();

function init(){
    canvas = document.getElementById('game_canvas');
    level = new Level(canvas);

    console.log("character is ", level.player);
}