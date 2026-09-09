/**
 * Create new background element (layer2). 
 */
class BG2 extends MovableObject{
    height = 389;
    width = 1080;

    /**
     * Load and position new background element.
     * @param {string} imgPath - image path 
     * @param {number} x - position on X-axes
     * @param {number} y - position on y-axes
     */
        constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;
    }
}