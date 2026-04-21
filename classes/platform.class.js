class Platform{
    height = 256;
    width = 800;

    constructor(){

        this.img = new Image();
        this.img.src = './assets/level/platform.png';

        this.position_x = 10;
        this.position_y = 344;
    }
}