let canvas;
let world;
let keyboard;

function init(){
    canvas = document.getElementById('game_canvas');
    world = new World(canvas);
    keyboard = new Keyboard();
    
    // Nötig um Positionen von Elementen auf der Canvas zu steuern
        //ctx = canvas.getContext('2d');

    // setTimeout(function(){xyz},1000); führt function "xyz" nach 1 sec aus.
        //setTimeout(function(){
        //    ctx.drawImage(charcater, 20, 20, 50, 50);
        //}, 2000);
    
    console.log("My character is " , world.character);
}

window.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.code === 'a' || event.code === 'A') {
        Keyboard.left = true;
    } else if (event.code === 'd' || event.code === 'D') {
        Keyboard.right = true;
    } else if (event.code === 'Space') {
        Keyboard.jump = true;
        console.log(Keyboard.jump);
    } else if (event.code === 'Enter') {
        Keyboard.shoot = true;
    }
});

window.addEventListener("keyup", (event) => {
    console.log(event);
    if (event.code === 'a' || event.code === 'A') {
        Keyboard.left = false;
    } else if (event.code === 'd' || event.code === 'D') {
        Keyboard.right = false;
    } else if (event.code === 'Space') {
        Keyboard.jump = false;
        console.log(Keyboard.jump);
    } else if (event.code === 'Enter') {
        Keyboard.shoot = false;
    }
});