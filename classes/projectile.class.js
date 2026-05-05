class Shot extends MovableObject{
    height = 40;
    width = 40;
    hitOffset_x;
    hitOffset_y;
    hitWidth = 80;
    hitHeight = 80;

    constructor(x,y){
        super().loadImage('./assets/player/shot.png');
        this.position_x = x + 150;
        this.position_y = y + 25;
        this.animation(100,100);
    }

    animation(){
        setInterval( () => {
            this.position_x += 10;
            this.setPosition();
            //this.deleteThis();
        }, 1000 / 30)
    }

    setPosition(){
        this.hitOffset_x = this.position_x -20;
        this.hitOffset_y = this.position_y -20;
    }

    //deleteThis(){
    //}
}