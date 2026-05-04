class Lava extends MovableObject{

    img_lava = [
        './assets/enemy/unit_2/0.png',
        './assets/enemy/unit_2/1.png',
        './assets/enemy/unit_2/2.png',
        './assets/enemy/unit_2/3.png',
        './assets/enemy/unit_2/4.png',
        './assets/enemy/unit_2/5.png',
        './assets/enemy/unit_2/6.png',
        './assets/enemy/unit_2/7.png',
    ];

    height = 256;
    width = 800;
    position_y = 450;
    hitOffset_x = 0;
    hitOffset_y = 500;
    hitWidth = 140;
    hitHeight = 140;

    constructor(imgPath, x, y){
        super().loadImage(imgPath);
        this.loadImages(this.img_lava);
        this.position_x = x;
        this.position_y = y;
        animation();
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
        this.hitOffset_x = this.position_x + 80;
        this.hitOffset_y = this.position_y + 75;
    }
}