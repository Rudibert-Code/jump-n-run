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

    // hitbox
    hitOffset_x = 0;
    hitOffset_y = 550;
    hitWidth = 200;
    hitHeight = 150;

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
            this.setPosition();
        }, 1000 / 30);
    }

    animation(){
        setInterval(() => { 
            let i = this.currentImage % this.img_idle.length;
            let path = this.img_idle[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            this.setPosition();
        }, 1000 / 30);
    }
    setPosition(){
        this.hitOffset_x = this.position_x;
    }
    destroyUnit(){
        console.log("Enemy Died");
    }
}