/**
 * Create new background element (layer1)
 */
class BG1 extends MovableObject{
    height = 256;
    width = 800;

    /**
     * Load and position new background element.
     * @param {string} imgPath - image path
     * @param {number} x - position on x-axes
     * @param {number} y - position on y-axes
     */
    constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;
    }
}