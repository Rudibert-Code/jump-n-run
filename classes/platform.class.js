class Platform{
    height = 162;
    width = 300;
    hitOffset_x = 0;
    hitOffset_y = 570;
    hitHeight = 162;
    hitWidth = 300;

    constructor(){

        this.img = new Image();
        this.img.src = './assets/level/platform.png';
        this.position_x = 0;   
        this.position_y = 570;
    }
}