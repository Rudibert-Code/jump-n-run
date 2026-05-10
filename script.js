let canvas;
let world;
let keyboard;
let mute = 0;
let effectVolume = 0.2;

function initGame(){
    setSound();
    AudioHub.playSound(AudioHub.UISelect);
    startLevel1 = true;
    document.getElementById('game_canvas').classList.remove("hide");
    document.getElementById('screen-graphic').classList.add("hide");
    document.getElementById('button').classList.add("hide");
    document.getElementById('settings').classList.remove("hide");
    renderLeve();
    canvas = document.getElementById('game_canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    checkScreenOrientation();
}

function checkScreenOrientation(){
    if (window.screen.width <= 1079) {
        fullscreen();
    } else{
        exitFullscreen();
    }
}

function fullscreen(){
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.webkitRequestFullscreen) {
    canvas.webkitRequestFullscreen();
  } else if (canvas.msRequestFullscreen) {
    canvas.msRequestFullscreen();
  }
}

function exitFullscreen(){
  if (canvas.exitFullscreen) {
    canvas.exitFullscreen();
  } else if (canvas.webkitExitFullscreen) {
    canvas.webkitExitFullscreen();
  } else if (canvas.msExitFullscreen) {
    canvas.msExitFullscreen();
  }
}

function editSound(){
    if (mute == 0) {
        effectVolume = 0;
        mute = 1;
        document.getElementById('settings').classList.add("opacity");
    } else {
        effectVolume = 0.2;
        mute = 0;
        document.getElementById('settings').classList.remove("opacity");
    }
    document.getElementById('theme-player').volume = effectVolume;
    saveSound();
}

function saveSound(){
    localStorage.setItem("ClassBoolean", mute);
    localStorage.setItem("Volume", effectVolume);
    setSound();
}

function setSound(){
    let audioVolume = Number(localStorage.getItem("ClassBoolean"));
    if (audioVolume == 0) {
        mute = 0;
        document.getElementById('settings').classList.remove("opacity");
    } else {
        mute = 1;
        document.getElementById('settings').classList.add("opacity");
    }
    effectVolume = Number(localStorage.getItem("Volume"));
    document.getElementById('theme-player').volume = effectVolume;
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

window.matchMedia("(orientation: portrait)").addEventListener("change", screenOrientation => {
    const portrait = screenOrientation.matches;
    if(portrait){
        alert("This game only supports landscape mode. Please turn your phone.")
    }
});