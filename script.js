let canvas;
let world;
let keyboard;

function init(){
    canvas = document.getElementById('game_canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);    
}
window.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.keyCode == 65) {
        keyboard.left = true;
    } else if (event.keyCode == 68) {
        keyboard.right = true;
    } else if (event.keyCode == 87 && world.character.position_y >= 400) {
        keyboard.jump = true;
    } else if (event.keyCode == 79) {
        keyboard.shoot = true;
    }
});
window.addEventListener("keyup", (event) => {
    //console.log(event);
    if (event.keyCode == 65) {
        keyboard.left = false;
    } else if (event.keyCode == 68) {
        keyboard.right = false;
    } else if (event.keyCode == 87) {
       keyboard.jump = false;
    } else if (event.keyCode == 79) {
        keyboard.shoot = false;
    }
});