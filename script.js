let canvas;
let world;

function init(){
    canvas = document.getElementById('game_canvas');
    world = new World(canvas);
    
    // Nötig um Positionen von Elementen auf der Canvas zu steuern
        //ctx = canvas.getContext('2d');

    // setTimeout(function(){xyz},1000); führt function "xyz" nach 1 sec aus.
        //setTimeout(function(){
        //    ctx.drawImage(charcater, 20, 20, 50, 50);
        //}, 2000);
    
    console.log("My character is " , world.charcater);
}