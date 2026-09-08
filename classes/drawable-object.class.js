class DrawableObject{
    static pendingImages = [];
    position_x = 0;
    position_y = 500;
    height = 200;
    width = 200;
    img;
    imageCache={};
    currentImage = 0;

    loadImage(path){
        this.img = new Image();
        DrawableObject.pendingImages.push(this.trackImage(this.img));
        this.img.src = path;
    }

    loadImages(ar){
        ar.forEach(path => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image; 
            DrawableObject.pendingImages.push(this.trackImage(image));
        });
    }

    trackImage(image){
        return new Promise((resolve) => {
            if (image.complete) {
                resolve();
                return;
            }
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
        });
    }

    static waitForImages(){
        return Promise.all(DrawableObject.pendingImages);
    }
}