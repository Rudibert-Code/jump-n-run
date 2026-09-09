/**
 * Create Sky element
 */
class Sky extends MovableObject{
    height = 600;
    width = 1080;

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
    }
}