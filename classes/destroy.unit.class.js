class Destroy extends MovableObject{
    img_destroy = [
        './assets/enemy/destroy/3.png',
        './assets/enemy/destroy/4.png',
        './assets/enemy/destroy/5.png',
        './assets/enemy/destroy/6.png',
        './assets/enemy/destroy/7.png',
        './assets/enemy/destroy/8.png',
        './assets/enemy/destroy/9.png',
        './assets/enemy/destroy/10.png',
        './assets/enemy/destroy/11.png',
        './assets/enemy/destroy/12.png',
        './assets/enemy/destroy/13.png',
        './assets/enemy/destroy/14.png',
        './assets/enemy/destroy/15.png',
        './assets/enemy/destroy/16.png',
        './assets/enemy/destroy/17.png',
    ];

    height = 200;
    width = 200;

    constructor(x,y){
        super().loadImage('./assets/enemy/destroy/3.png');
        this.loadImages(this.img_destroy);
        this.position_x = x;
        this.position_y = y;
        this.animation();
    }
    animation(){
        setInterval(() => { 
            let i = this.currentImage % this.img_destroy.length;
            let path = this.img_destroy[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            if (this.currentImage == 14) {
                this.img_destroy.splice(0,14);
            }
        }, 1000 / 30);
    }
}