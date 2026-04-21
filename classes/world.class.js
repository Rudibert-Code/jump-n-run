class World{
    charcater = new Character();
    enemies = [
        new EnemyTank(),
        new EnemyTank(),
        new EnemyTank(),
    ];

    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw(){

    }
}