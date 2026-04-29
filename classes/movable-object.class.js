class MovableObject{
    position_x = 0;
    position_y = 500;
    height = 200;
    width = 200;
    img;
    currentImage = 0;
    otherDirection = false;

    lifePoints = 100;


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

    isColliding(object){
        return this.hitOffset_x + this.hitWidth > object.hitOffset_x &&
        this. hitOffset_y + this.hitHeight > object.hitOffset_y &&
        this.hitOffset_x < object.hitOffset_x &&
        // abfrage durch OR erweitert, um horizontale hindernisse einzubeziehen 
        this.hitOffset_y < object.hitOffset_y || this.hitOffset_x + this.hitWidth > object.hitOffset_x &&
        this. hitOffset_y + this.hitHeight > object.hitOffset_y + object.hitHeight &&
        this.hitOffset_x < object.hitOffset_x &&
        this.hitOffset_y < object.hitOffset_y + object.hitHeight || this.hitOffset_x + this.hitWidth > object.hitOffset_x + object.hitWidth &&
        this. hitOffset_y + this.hitHeight > object.hitOffset_y &&
        this.hitOffset_x < object.hitOffset_x + object.hitWidth &&
        this.hitOffset_y < object.hitOffset_y || this.hitOffset_x + this.hitWidth > object.hitOffset_x + object.hitWidth &&
        this. hitOffset_y + this.hitHeight > object.hitOffset_y + object.hitHeight &&
        this.hitOffset_x < object.hitOffset_x + object.hitWidth &&
        this.hitOffset_y < object.hitOffset_y + object.hitHeight
    }
}