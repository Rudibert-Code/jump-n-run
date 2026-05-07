class AmoTwo extends MovableObject{
    amo = [
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
        './assets/ui/ani_amo/12.png',
        './assets/ui/ani_amo/13.png',
    ];

    height = 80;
    width = 80;
    position_x;
    position_y;
    hitOffset_x = 0;
    hitOffset_y = 0;
    hitWidth = 80;
    hitHeight = 80;

    constructor(x,y){
        super().loadImage('./assets/ui/ani_amo/1.png');
        this.loadImages(this.amo);
        this.position_x = x;
        this.position_y = y + 150;
        this.animation(100,100);
    }

    animation(){
        setInterval( () => {
            this.position_x -= 10;
            let iD = this.currentImage % this.amo.length;
            let path = this.amo[iD];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.setPosition();
        }, 1000 / 30)
    }

    setPosition(){
        this.hitOffset_x = this.position_x;
        this.hitOffset_y = this.position_y;
    }
}