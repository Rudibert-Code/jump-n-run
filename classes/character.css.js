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

    world;

    constructor(){
        super().loadImage('./assets/player/idle/0.png');
        this.loadImages(this.img_idle);

        this.animation();
    }

    animation(){

        // steuerung durch eventlistener : if (this.world.keyboard.rigth){...}

        setInterval(() => {
            // % = mathematischer rest ... bspl: 5 % 15 > 0 rest 5 > 15 kommt 0 mal in 5 vor, bleiben 5.
            // % => 1, 2, 3, 4, ... 13, 14, 15, 0, 1, 3 etc. loop  
            let i = this.currentImage % this.img_idle.length;

            let path = this.img_idle[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 30);
    }

    jump(){

    }
    moveRight(){

    }
    moveLeft(){

    }
    fire(){

    }
}