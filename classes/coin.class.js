class Coins extends MovableObject{

    img_coin = [
        './assets/ui/ani_coin/1.png',
        './assets/ui/ani_coin/2.png',
        './assets/ui/ani_coin/3.png',
        './assets/ui/ani_coin/4.png',
        './assets/ui/ani_coin/5.png',
        './assets/ui/ani_coin/6.png',
        './assets/ui/ani_coin/7.png',
        './assets/ui/ani_coin/8.png',
        './assets/ui/ani_coin/9.png',
        './assets/ui/ani_coin/10.png',
        './assets/ui/ani_coin/11.png',
        './assets/ui/ani_coin/12.png',
    ];

    height = 80;
    width = 80;

    // hitbox
    hitOffset_x = 0;
    hitOffset_y = 0;
    hitWidth = 80;
    hitHeight = 80;

    constructor(){
        super().loadImage('./assets/ui/ani_coin/1.png');
        this.loadImages(this.img_coin);
        this.position_x = 200 + Math.random() * 100;
        this.animation();
    }

    animation(){
        setInterval(() => { 
            let i = this.currentImage % this.img_coin.length;
            let path = this.img_coin[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.setPosition();
        }, 1000 / 30);
    }

    setPosition(){
        this.hitOffset_x = this.position_x;
        this.hitOffset_y = this.position_y;
    }
}