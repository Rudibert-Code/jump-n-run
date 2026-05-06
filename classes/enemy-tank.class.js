class EnemyTank extends MovableObject{
    img_idle = [
        './assets/enemy/unit_2/0.png',
        './assets/enemy/unit_2/1.png',
        './assets/enemy/unit_2/2.png',
        './assets/enemy/unit_2/3.png',
        './assets/enemy/unit_2/4.png',
        './assets/enemy/unit_2/5.png',
        './assets/enemy/unit_2/6.png',
        './assets/enemy/unit_2/7.png',
    ];

    hitOffset_x = 0;
    hitOffset_y = 450;
    hitWidth = 200;
    hitHeight = 150;
    destroy = false;

    constructor(imgPath, x){
        super().loadImage(imgPath);
        this.loadImages(this.img_idle);

        this.position_y = 400;
        this.position_x = x;

        this.animate();
        this.animation();
    }

    animate(){
        setInterval( () => {
            this.position_x -= 3;
            this.setPosition();  
        }, 1000 / 30);
    }
    animation(){
        setInterval(() => { 
            if (this.destroy == true) {
                let iD = this.currentImage % this.img_destroy.length;
                let path = this.img_destroy[iD];
                this.img = this.imageCache[path];
                this.currentImage++;
                console.log("DEAD");
            } else {
                let iW = this.currentImage % this.img_idle.length;
                let path = this.img_idle[iW];
                this.img = this.imageCache[path];
                this.currentImage++;
                this.setPosition(); 
            }
        }, 1000 / 30);
    }
    setPosition(){
        this.hitOffset_x = this.position_x;
    }
}