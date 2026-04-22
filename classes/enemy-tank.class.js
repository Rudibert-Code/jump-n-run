class EnemyTank extends MovableObject{
    constructor(){
        super().loadImage('./assets/enemy/unit_2/0.png');
        
        this.position_x = 500 + Math.random() * 100;

        this.animate();
    }

    animate(){
        setInterval( () => {
            this.position_x -= 3;
        }, 1000 / 30);
    }
}