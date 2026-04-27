class BG1 extends MovableObject{
    height = 256;
    width = 800;

    constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;
    }
}