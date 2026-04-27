class Sky extends MovableObject{
    height = 600;
    width = 1080;

    constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;
    }
}