class Shot extends MovableObject{
    height = 100;
    width = 100;
    position_x;
    position_Y;
    
    hitOffset_x = 0;
    hitOffset_y = 0;
    hitWidth = 100;
    hitHeight = 100;

    constructor(){
        super().loadImage('./assets/player/shot.png');

        //this.animateUp();
    }
}