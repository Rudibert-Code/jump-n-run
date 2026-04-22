class MovableObject{
    position_x = 200;
    position_y = 500;
    height = 200;
    width = 200;
    img;


    loadImage(path){
        this.img = new Image(); // gleichbedeutend mit  this.img = document.getElementByID('image')
        this.img.src = path;
    }

    moveRight(){
        console.log("Moving right");
    }
}