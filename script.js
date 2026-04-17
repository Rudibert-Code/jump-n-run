let canvas;
let ctx;
let character = new Player();

function init(){
    canvas = document.getElementById('game_canvas');
    ctx = canvas.getContext('2d');

    console.log("character is ", character);
}