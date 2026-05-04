class Platform extends MovableObject{
    height = 162;
    width = 300;
    hitOffset_x = 0;
    hitOffset_y = 570;
    hitHeight = 162;
    hitWidth = 300;

    constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;
    }
}