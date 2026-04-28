class Character extends MovableObject{

    img_idle = [
        './assets/player/idle/0.png',
        './assets/player/idle/1.png',
        './assets/player/idle/2.png',
        './assets/player/idle/3.png',
        './assets/player/idle/4.png',
        './assets/player/idle/5.png',
        './assets/player/idle/6.png',
        './assets/player/idle/7.png',
        './assets/player/idle/8.png',
        './assets/player/idle/9.png',
        './assets/player/idle/10.png',
        './assets/player/idle/11.png',
        './assets/player/idle/12.png',
        './assets/player/idle/13.png',
        './assets/player/idle/14.png',
        './assets/player/idle/15.png',
    ];
    img_walk = [
        './assets/player/walk/0.png',
        './assets/player/walk/1.png',
        './assets/player/walk/2.png',
        './assets/player/walk/3.png',
        './assets/player/walk/4.png',
        './assets/player/walk/5.png',
        './assets/player/walk/6.png',
        './assets/player/walk/7.png',
        './assets/player/walk/8.png',
        './assets/player/walk/9.png',
        './assets/player/walk/10.png',
        './assets/player/walk/11.png',
        './assets/player/walk/12.png',
        './assets/player/walk/13.png',
        './assets/player/walk/14.png',
        './assets/player/walk/15.png',
    ];
    img_jump = [
        './assets/player/jump-loop/0.png',
        './assets/player/jump-loop/1.png',
        './assets/player/jump-loop/2.png',
        './assets/player/jump-loop/3.png',
        './assets/player/jump-loop/4.png',
        './assets/player/jump-loop/5.png',
        './assets/player/jump-loop/6.png',
        './assets/player/jump-loop/7.png',
        './assets/player/jump-loop/8.png',
        './assets/player/jump-loop/9.png',
        './assets/player/jump-loop/10.png',
        './assets/player/jump-loop/11.png',
        './assets/player/jump-loop/12.png',
        './assets/player/jump-loop/13.png',
        './assets/player/jump-loop/14.png',
        './assets/player/jump-loop/15.png',
    ];

    world;
    coolDown = 0;

    speed_y = 0;
    acceleration = 2.5;


    constructor(){
        super().loadImage('./assets/player/idle/0.png');
        this.loadImages(this.img_idle);
        this.loadImages(this.img_walk);
        this.loadImages(this.img_jump);
        this.applyGravity();
        this.controls();
        //this.animation();
    }

    applyGravity(){
        setInterval(() => {
            if (this.position_y <= 500) {
                this.position_y -= this.speed_y;
                this.speed_y -= this.acceleration;
            }
            if (this.position_y >= 500) {
                this.position_y = 500;
            }
        }, 1000/30);
    }

    controls(){

        setInterval(() => {

            if (this.world.keyboard.right || this.world.keyboard.left) {
                if(this.position_y >= 500){
                    let i = this.currentImage % this.img_walk.length;
                    let path = this.img_walk[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                    //this.animation(this.img_walk);
                }
                if(this.world.keyboard.right && this.position_x <= this.world.level.levelEndX){
                    this.moveRight();
                } else if(this.world.keyboard.left && this.position_x >= 0){
                    this.otherDirection = true;
                    this.moveLeft();
                }
            } else if (this.world.keyboard.jump && this.position_y >= 500) {
                this.jump();
            } else if (this.world.keyboard.right == false && this.world.keyboard.left == false && this.position_y >= 500) {
                    this.otherDirection = false;
                    let i = this.currentImage % this.img_idle.length;
                    let path = this.img_idle[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                    //this.animation(this.img_idle);
            } else if (this.position_y <= 499){
                    let i = this.currentImage % this.img_jump.length;
                    let path = this.img_jump[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                    //let jump = this.img_jump;
                    //this.animation(this.img_jump);
                }
            this.world.camera_x = -this.position_x + 100;
        }, 1000/30);
    }

    //animation(aniType){
    //    setInterval(() => {
    //        aniI = this.currentImage % aniType.length;
    //        let path = aniType[aniI];
    //        this.img = this.imageCache[path];
    //        this.currentImage++;
    //    }, 1000/30);
    //}

    jump(){
        this.speed_y = 30;
    }
    moveRight(){
        this.position_x += 8;
    }
    moveLeft(){
        this.position_x -= 8;
    }
    fire(){
    }
}