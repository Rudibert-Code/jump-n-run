class Platform{
    height = 81;
    width = 150;

    constructor(){

        this.img = new Image();
        this.img.src = './assets/level/platform.png';

        this.position_x = 0;
        this.position_y = 580;
    }
}