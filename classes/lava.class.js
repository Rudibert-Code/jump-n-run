class Lava extends MovableObject{

    img_lava = [
        './assets/level/hazard/lava/0.png',
        './assets/level/hazard/lava/1.png',
        './assets/level/hazard/lava/2.png',
        './assets/level/hazard/lava/3.png',
        './assets/level/hazard/lava/4.png',
        './assets/level/hazard/lava/5.png',
        './assets/level/hazard/lava/6.png',
        './assets/level/hazard/lava/7.png',
        './assets/level/hazard/lava/8.png',
        './assets/level/hazard/lava/9.png',
        './assets/level/hazard/lava/10.png',
        './assets/level/hazard/lava/11.png',
        './assets/level/hazard/lava/12.png',
        './assets/level/hazard/lava/13.png',
        './assets/level/hazard/lava/14.png',
        './assets/level/hazard/lava/15.png',
        './assets/level/hazard/lava/16.png',
        './assets/level/hazard/lava/17.png',
        './assets/level/hazard/lava/18.png',
        './assets/level/hazard/lava/19.png',
        './assets/level/hazard/lava/20.png',
        './assets/level/hazard/lava/21.png',
        './assets/level/hazard/lava/22.png',
        './assets/level/hazard/lava/23.png',
    ];

    height = 162;
    width = 300;
    hitOffset_x = 0;
    hitOffset_y = 0;
    hitHeight = 200;
    hitWidth = 180;

    constructor(imgPath, x, y){
        super().loadImage(imgPath);
        this.loadImages(this.img_lava);
        this.position_x = x;
        this.position_y = y;
        this.animation();
    }

    animation(){
        setInterval(() => { 
            let i = this.currentImage % this.img_lava.length;
            let path = this.img_lava[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.setPosition();
        }, 1000 / 30);
    }
    setPosition(){
        this.hitOffset_x = this.position_x + 60;
        this.hitOffset_y = this.position_y;
    }
}