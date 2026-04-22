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

    constructor(){
        super().loadImage('./assets/enemy/unit_2/0.png');
        this.loadImages(this.img_idle);
        
        this.position_x = 500 + Math.random() * 100;

        this.animate();
        this.animation();
    }

    animate(){
        setInterval( () => {
            this.position_x -= 3;
        }, 1000 / 30);
    }

    animation(){
        setInterval(() => { 
            let i = this.currentImage % this.img_idle.length;
            let path = this.img_idle[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 30);
    }
}