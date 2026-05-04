let canvas;
let world;
let keyboard;
function init(){
    canvas = document.getElementById('game_canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);    
    console.log("My character is " , world.character);
}
window.addEventListener("keydown", (event) => {
    //console.log(event);
    if (event.keyCode == 65) {
        keyboard.left = true;
    } else if (event.keyCode == 68) {
        keyboard.right = true;
    } else if (event.code == 'Space' && world.character.position_y >= 400) {
        keyboard.jump = true;
    } else if (event.code == 'Enter') {
        keyboard.shoot = true;
    }
});
window.addEventListener("keyup", (event) => {
    //console.log(event);
    if (event.keyCode == 65) {
        keyboard.left = false;
    } else if (event.keyCode == 68) {
        keyboard.right = false;
    } else if (event.code == 'Space') {
       keyboard.jump = false;
    } else if (event.code == 'Enter') {
        keyboard.shoot = false;
    }
});