class Sky extends MovableObject{
    height = 600;
    width = 1080;

    constructor(){
        super().loadImage('./assets/level/deko/BG.png');

        this.position_x = 0;
        this.position_y = 0;
    }
}