class Amo extends MovableObject{
    img_amo = [
        './assets/ui/ani_amo/1.png',
        './assets/ui/ani_amo/2.png',
        './assets/ui/ani_amo/3.png',
        './assets/ui/ani_amo/4.png',
        './assets/ui/ani_amo/5.png',
        './assets/ui/ani_amo/6.png',
        './assets/ui/ani_amo/7.png',
        './assets/ui/ani_amo/8.png',
        './assets/ui/ani_amo/9.png',
        './assets/ui/ani_amo/10.png',
        './assets/ui/ani_amo/11.png',
        './assets/ui/ani_amo/12.png',
        './assets/ui/ani_amo/13.png',
    ];
    
    height = 80;
    width = 80;
    position_x = 500;
    position_y = 0;
    hitOffset_x = 0;
    hitOffset_y = 0;
    hitWidth = 80;
    hitHeight = 80;

    constructor(){
        super().loadImage('./assets/ui/ani_amo/1.png');
        this.loadImages(this.img_amo);
        //this.position_x = 500 + Math.random() * 100;
        this.animation();
    }

    animation(){
        setInterval(() => { 
            let i = this.currentImage % this.img_amo.length;
            let path = this.img_amo[i];
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