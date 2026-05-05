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
    img_hit = [
        './assets/player/hit/0.png',
        './assets/player/hit/1.png',
        './assets/player/hit/2.png',
        './assets/player/hit/3.png',
    ];

    world;
    pause = true;
    speed_y = 0;
    acceleration = 2;
    aniType;
    anI;
    aniPath;
    hitOffset_x = 0;
    hitOffset_y = 400;
    hitWidth = 150;
    hitHeight = 200;
    hit = false;
    midAir = false;
    click = 0;


    constructor(){
        super().loadImage('./assets/player/idle/0.png');
        this.loadImages(this.img_idle);
        this.loadImages(this.img_walk);
        this.loadImages(this.img_jump);
        this.loadImages(this.img_hit);
        this.coolDown();
        this.applyGravity();
        this.animations();
        this.offset_x = this.position_x;
        this.offset_y = this.position_y;
    }

    applyGravity(){
        setInterval(() => {
            if (this.position_y <= 399) {
                this.midAir = true;
                this.position_y -= this.speed_y;
                this.speed_y -= this.acceleration;
            }
            if (this.position_y >= 400) {
                this.midAir = false;
                this.position_y = 400;
            }
            this.setPosition();
        }, 1000/30);
    }
    animations(){
        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                if(this.position_y >= 400){
                    this.aniType = this.img_walk;
                }
                if(this.world.keyboard.right && this.position_x <= this.world.level.levelEndX){
                    this.moveRight();
                } else if(this.world.keyboard.left && this.position_x >= 0){
                    this.moveLeft();
                }
            }
            if (this.world.keyboard.right == false && this.world.keyboard.left == false && this.position_y >= 400) {
                this.aniType = this.img_idle;
            }
            if (this.world.keyboard.jump && this.position_y >= 400) {
                this.jump(40);
                this.position_y -= this.speed_y;
            }
            if (this.position_y <= 399){
                this.aniType = this.img_jump;
            }
            if (this.hit == true) {
                this.height = 230;
                this.width = 230; 
                this.aniType = this.img_hit;
                this.click++;
                if (this.click >= 15) {
                    this.height = 200;
                    this.width = 200;
                    this.click = 0;
                    this.hit = false;
                }
            }
            if (this.world.keyboard.shoot == true && this.pause == true && this.world.amoNumber >= 1){
                this.pause = false;
                this.shoot();
            }
            this.anI = this.currentImage % this.aniType.length;
            this.path = this.aniType[this.anI];
            this.img = this.imageCache[this.path];
            this.currentImage++;

            this.world.camera_x = -this.position_x + 100;
            this.setPosition();
        }, 1000/30);
    }

    jump(strength){
        this.speed_y = strength;
    }
    moveRight(){
        this.position_x += 8;
    }
    moveLeft(){
        this.position_x -= 8;
    }
    shoot(){
        this.world.amoNumber--
        let amo = new Shot(this.position_x, this.position_y);
        this.world.projectile.push(amo);
        this.world.pID++;
    }
    setPosition(){
        this.hitOffset_x = this.position_x;
        this.hitOffset_y = this.position_y;
    }
    coolDown(){
        setInterval(() => {
            if (this.pause == false) {
            this.click++
            if (this.click == 30) {
                this.click = 0;
                this.pause = true;
            }
            }
        }, 1000/30);
    }
}