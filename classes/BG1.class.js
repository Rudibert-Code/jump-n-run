/**
 * Create new background element (layer1)
 */
class BG1 extends MovableObject{
    height = 256;
    width = 800;

    /**
     * Load and position background element.
     * @param {string} imgPath 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;
    }
}