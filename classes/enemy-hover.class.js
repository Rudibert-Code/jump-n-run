class EnemyHover extends MovableObject{
    height = 300;
    width = 300;
    position_y = 450;
    hitOffset_x = 0;
    hitOffset_y = 500;
    hitWidth = 140;
    hitHeight = 140;

    constructor(){
        super().loadImage('./assets/enemy/unit_1/0.png');

        this.position_x = 500;

        this.animateUp();
    }

    animateUp(){
        this.aniUp = setInterval( () => {
            this.position_y-=2;
            if (this.position_y == 150) {
                this.animateDown();
                clearInterval(this.aniUp);
            }
            this.setPosition();
        }, 1000 / 30)
    }
    animateDown(){
        this.aniDown = setInterval( () => {
            this.position_y+=2;
            if (this.position_y == 350) {
                this.animateUp();
                clearInterval(this.aniDown);
            }
            this.setPosition();
        }, 1000 / 30)
    }
    setPosition(){
        this.hitOffset_x = this.position_x + 80;
        this.hitOffset_y = this.position_y + 75;
    }
}