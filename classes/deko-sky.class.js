/**
 * Create new Sky element
 */
class DekoSky extends MovableObject{
    devi = Math.random() * 30;
    height = 200 - this.devi;
    width = 800 - this.devi;

    /**
     * 
     * @param {string} imgPath - image path
     * @param {number} x - position on x-axes
     * @param {number} y - position on y-axes
     */
    constructor(imgPath, x, y){
        super().loadImage(imgPath);
        this.position_x = x;
        this.position_y = y;
        this.animate();
    }

    /**
     * Update element position on x-axes at set interval
     */
    animate(){
        setInterval( () => {
            this.position_x --;
        }, 1000 / 30);
    }
}