class DekoSky extends MovableObject{
    height = 200;
    width = 800;

        constructor(){
        super().loadImage('./assets/level/deko/BG_1_rocks1.png');

        this.position_x = 10;
        this.position_y = 10;
    }
}