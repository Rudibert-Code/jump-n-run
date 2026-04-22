class MovableObject{
    position_x = 200;
    position_y = 500;
    height = 200;
    width = 200;
    img;
    currentImage = 0;


    imageCache={};


    loadImage(path){
        this.img = new Image(); // gleichbedeutend mit  this.img = document.getElementByID('image')
        this.img.src = path;
    }

    loadImages(ar){
        ar.forEach(path => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image; 
        });
    }

    moveRight(){
        console.log("Moving right");
    }
}