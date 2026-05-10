let canvas;
let world;
let keyboard;
let mute = 0;
let effectVolume = 0.2;

function initGame(){
    setSound();
    AudioHub.playSound(AudioHub.UISelect);
    startLevel1 = true;
    renderLeve();
    canvas = document.getElementById('game_canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    checkScreenOrientation(canvas);
}

window.matchMedia("(orientation: portrait)").addEventListener("change", screenOrientation => {
    const portrait = screenOrientation.matches;
    if(portrait){
        alert("This game only supports landscape mode. Please turn your phone.")
    }
});

function checkScreenOrientation(element){
    if (window.screen.width <= 1079) {
        fullscreen(element);
    } else{
        exitFullscreen(element);
    }
}

function fullscreen(element){
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen(element){
  if (element.exitFullscreen) {
    element.exitFullscreen();
  } else if (element.webkitExitFullscreen) {
    element.webkitExitFullscreen();
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen();
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