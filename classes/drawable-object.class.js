class DrawableObject{
    position_x = 0;
    position_y = 500;
    height = 200;
    width = 200;
    img;
    imageCache={};
    currentImage = 0;

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
}