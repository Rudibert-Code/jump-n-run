class BG1 extends MovableObject{
    height = 256;
    width = 800;

    constructor(){
        super().loadImage('./assets/level/deko/BG1.png');

        this.position_x = 10;
        this.position_y = 344;
    }
}