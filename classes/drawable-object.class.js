/**
 * Create new drawable object
 */
class DrawableObject{
    static pendingImages = [];
    position_x = 0;
    position_y = 500;
    height = 200;
    width = 200;
    img;
    imageCache={};
    currentImage = 0;

    /**
     * Get get element image; Update element image
     * @param {string} path 
     */
    loadImage(path){
        this.img = new Image();
        DrawableObject.pendingImages.push(this.trackImage(this.img));
        this.img.src = path;
    }

    /**
     * Load and store images for later use
     * @param {any} ar 
     */
    loadImages(ar){
        ar.forEach(path => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image; 
            DrawableObject.pendingImages.push(this.trackImage(image));
        });
    }

    /**
     * Waits for image to load or fail to load.
     * @param {HTMLImageElement} image - Image
     * @returns {Promise<void>} - Promise resolved when the image is complete,
     * loaded, or has reported an error.
     */
    trackImage(image){
        return new Promise((resolve) => {
            if (image.complete) {
                resolve();
                return;
            }
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
        });
    }

    /**
     * Waits for images to load or fail to load.
     * @returns {Promise<void[]>} Promise resolved when all pending images
     * have completed.
     */
    static waitForImages(){
        return Promise.all(DrawableObject.pendingImages);
    }
}