class Shot extends MovableObject{
    height = 40;
    width = 40;

    hitOffset_x = 0;
    hitOffset_y = 0;
    hitWidth = 40;
    hitHeight = 40;

    constructor(x,y){
        super().loadImage('./assets/player/shot.png');

        this.position_x = x + 150;
        this.position_y = y + 25;

        this.animation(100,100);
    }

    animation(){
        setInterval( () => {
            this.position_x += 10;
            //this.setPosition();
        }, 1000 / 30)
    }

    setPosition(){
        this.hitOffset_x = this.position_x;
        this.hitOffset_y = this.position_y;
    }
}