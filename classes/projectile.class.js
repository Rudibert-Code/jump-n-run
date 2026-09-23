/**
 * Creates player projectile / shot element
 */
class Shot extends MovableObject{
    height = 40;
    width = 40;
    hitOffset_x;
    hitOffset_y;
    hitWidth = 100;
    hitHeight = 100;
    pause = "false";

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x,y){
        super().loadImage('./assets/player/shot.png');
        this.position_x = x + 150;
        this.position_y = y + 25;
        this.animation(100,100);
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
     * Updates element position at the set interval
     */
    animation(){
        setInterval( () => {
            if (this.pause == "false") {
                this.position_x += 10;
                this.setPosition();
            }
        }, 1000 / 30)
    }

    /**
     * Updates element position
     */
    setPosition(){
        this.hitOffset_x = this.position_x -30;
        this.hitOffset_y = this.position_y -30;
    }
}