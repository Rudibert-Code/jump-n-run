class Shot extends MovableObject{
    height = 40;
    width = 40;
    position_x = 100;
    position_y = 100;

    hitOffset_x = 0;
    hitOffset_y = 0;
    hitWidth = 40;
    hitHeight = 40;

    constructor(){
        super().loadImage('./assets/player/shot.png');

        this.animation();
    }

    shoot(x,y){
        this.position_x = x;
        this.position_y = y;
        this.animation();
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