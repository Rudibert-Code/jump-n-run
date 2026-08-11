class EnemyHover extends MovableObject{
    height = 300;
    width = 300;
    position_y = 450;
    hitOffset_x = 0;
    hitOffset_y = 500;
    hitWidth = 100;
    hitHeight = 120;
    pause = "false";

    constructor(imgPath, x){
        super().loadImage(imgPath);
        this.position_x = x;
        this.animateUp();
        this.checkForPause();
    }

    checkForPause(){
        setInterval(() => {
            this.pause = localStorage.getItem("paused");
        }, 1000/30);
    }

    animateUp(){
        this.aniUp = setInterval( () => {
            if (this.pause == "false") {
                
                this.position_y-=2;
                if (this.position_y == 150) {
                    this.animateDown();
                    clearInterval(this.aniUp);
                }
                this.setPosition();

            }
        }, 1000 / 30)
    }
    animateDown(){
        this.aniDown = setInterval( () => {
            if (this.pause == "false") {

                this.position_y+=2;
                if (this.position_y == 350) {
                    this.animateUp();
                    clearInterval(this.aniDown);
                }
                this.setPosition();
            
            }
        }, 1000 / 30)
    }
    setPosition(){
        this.hitOffset_x = this.position_x + 100;
        this.hitOffset_y = this.position_y + 85;
    }
}