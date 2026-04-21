class EnemyTank extends MovableObject{
    constructor(){
        super().loadImage('./assets/enemy/unit_2/0.png');

        this.position_x = 500 + Math.random() * 100;
    }
}