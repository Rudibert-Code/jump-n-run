class BG2 extends MovableObject{
    height = 389;
    width = 1080;

        constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;
    }
}