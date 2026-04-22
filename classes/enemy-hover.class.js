class EnemyHover extends MovableObject{
    height = 300;
    width = 300;
    position_y = 450;

    constructor(){
        super().loadImage('./assets/enemy/unit_1/0.png');

        this.position_x = 500;

        this.animateUp();
    }

    
    animateUp(){
        this.aniUp = setInterval( () => {
            this.position_y-=2;
            if (this.position_y == 300) {
                this.animateDown();
                clearInterval(this.aniUp);
            }
        }, 1000 / 30)
    }
    animateDown(){
        this.aniDown = setInterval( () => {
            this.position_y+=2;
            if (this.position_y == 450) {
                this.animateUp();
                clearInterval(this.aniDown);
            }
        }, 1000 / 30)
    }
}