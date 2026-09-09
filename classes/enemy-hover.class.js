/**
 * Create new Enemy Hover element
 */
class EnemyHover extends MovableObject{
    height = 300;
    width = 300;
    position_y = 450;
    hitOffset_x = 0;
    hitOffset_y = 500;
    hitWidth = 100;
    hitHeight = 120;
    pause = "false";

    /**
     * 
     * @param {string} imgPath 
     * @param {number} x 
     */
    constructor(imgPath, x){
        super().loadImage(imgPath);
        this.position_x = x;
        this.animateUp();
        this.checkForPause();
    }

    /**
     * Check if game is paused
     */
    checkForPause(){
        setInterval(() => {
            this.pause = localStorage.getItem("paused");
        }, 1000/30);
    }

    /**
     * Move Enemy Hover up
     */
    animateUp(){
        this.aniUp = setInterval( () => {
            if (this.pause == "false") {
                this.position_y-=2;

                /**
                 * Trigger Enemy Hover's "Down" animation
                 */
                if (this.position_y == 150) {
                    this.animateDown();
                    clearInterval(this.aniUp);
                }
                this.setPosition();

            }
        }, 1000 / 30)
    }

    /**
     * Move Enemy over down
     */
    animateDown(){
        this.aniDown = setInterval( () => {
            if (this.pause == "false") {
                this.position_y+=2;

                /**
                 * Trigger Enemy Hover's "Up" animation
                 */
                if (this.position_y == 350) {
                    this.animateUp();
                    clearInterval(this.aniDown);
                }
                this.setPosition();
            
            }
        }, 1000 / 30)
    }

    /**
     * Update Enemy Hover's position on y-axes
     */
    setPosition(){
        this.hitOffset_x = this.position_x + 100;
        this.hitOffset_y = this.position_y + 85;
    }
}