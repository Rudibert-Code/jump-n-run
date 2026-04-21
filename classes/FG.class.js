class FG extends MovableObject{
    height = 605;
    width = 1080;

        constructor(){
        super().loadImage('./assets/level/deko/FG.png');

        this.position_x = 0;
        this.position_y = 115;
    }
}