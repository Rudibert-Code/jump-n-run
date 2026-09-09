/**
 * Creates new movable object
 */
class MovableObject extends DrawableObject{
    otherDirection = false;
    lifePoints = 100;

    /**
     * Checks for collision between game element and current element's hitbox
     * @param {HTMLElement} object 
     * @returns 
     */
    isColliding(object) {
    return this.hitOffset_x < object.hitOffset_x + object.hitWidth &&
        this.hitOffset_x + this.hitWidth > object.hitOffset_x &&
        this.hitOffset_y < object.hitOffset_y + object.hitHeight &&
        this.hitOffset_y + this.hitHeight > object.hitOffset_y;
    } 
}