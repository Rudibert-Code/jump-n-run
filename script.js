let canvas;
let world;
let keyboard;
let mute = false;
let effectVolume = 0.2;

function initGame(){
    AudioHub.playSound(AudioHub.UISelect);
    startLevel1 = true;
    document.getElementById('screen-graphic').classList.add("hide");
    document.getElementById('button').classList.add("hide");
    document.getElementById('settings').classList.remove("hide");
    renderLeve();
    canvas = document.getElementById('game_canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard); 
}

function editSound(){
    if (mute == false) {
        document.getElementById('theme-player').volume = 0;
        effectVolume = 0;
        document.getElementById('settings').classList.add("opacity");
        mute = true;
    } else {
        document.getElementById('theme-player').volume = 0.2;
        effectVolume = 0.2;
        document.getElementById('settings').classList.remove("opacity");
        mute = false;
    }
}

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 65) {
        keyboard.left = true;
    } else if (event.keyCode == 68) {
        keyboard.right = true;
    } else if (event.code == 'Space' && world.character.position_y >= 400) {
        event.preventDefault();
        keyboard.jump = true;
    } else if (event.code == 'Enter') {
        event.preventDefault();
        keyboard.shoot = true;
    }
});
window.addEventListener("keyup", (event) => {
    if (event.keyCode == 65) {
        keyboard.left = false;
    } else if (event.keyCode == 68) {
        keyboard.right = false;
    } else if (event.code == 'Space') {
        event.preventDefault();
       keyboard.jump = false;
    } else if (event.code == 'Enter') {
        event.preventDefault();
        keyboard.shoot = false;
    }
});