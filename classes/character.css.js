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

    constructor(){
        super().loadImage('./assets/player/idle/0.png');
        this.loadImages(this.img_idle);
        this.loadImages(this.img_walk);
        this.loadImages(this.img_jump);

        this.animation();
    }

    animation(){

        setInterval(() => {

            // gravity
            this.position_y += 20;
            if (this.position_y >= 500) {
                this.position_y = 500;
                this.coolDown--;
            }

            if (this.world.keyboard.right || this.world.keyboard.left) {
            let i = this.currentImage % this.img_walk.length;
            let path = this.img_walk[i];
            this.img = this.imageCache[path];
            this.currentImage++;
                if(this.world.keyboard.right){
                    this.moveRight();
                } else if(this.world.keyboard.left){
                    this.otherDirection = true;
                    this.moveLeft();
                }
            } else 
                if (this.world.keyboard.jump && this.coolDown <= 0) {
                    // sets cooldown to 5; so player must wait for 1/6 sec. to jump  after landing
                    this.coolDown = 5;
                    this.jump();
            } else 
                if (this.world.keyboard.right == false && this.world.keyboard.left == false && this.position_y >= 500) {
                    this.otherDirection = false;
                    // % = mathematischer rest ... bspl: 5 % 15 > 0 rest 5 > 15 kommt 0 mal in 5 vor, bleiben 5.
                    // % => 1, 2, 3, 4, ... 13, 14, 15, 0, 1, 3 etc. loop  
                    let i = this.currentImage % this.img_idle.length;
                    let path = this.img_idle[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
            }
        }, 1000 / 30);
    }
    

    jump(){
        // change character position_y 
        this.position_y -= 200; 
        // play jump-ani
        if (this.position_y <= 499) {
            let i = this.currentImage % this.img_jump.length;
            let path = this.img_jump[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }
    moveRight(){
        this.position_x += 8;
        if (this.position_x >= 500) {
            this.position_x = 500;
        }
    }
    moveLeft(){
        this.position_x -= 8;
        if (this.position_x <= 50) {
            this.position_x = 50;
        }
    }
    fire(){

    }
}