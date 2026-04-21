class World{
    character = new Character();
    enemies = [
        new EnemyTank(),
        new EnemyTank(),
        new EnemyTank(),
    ];

    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.position_x, this.character.position_y, this.character.width, this.character.height);
        
        // ruft draw methode nach ausführung erneut auf / "this." wird in functionen innerhalb einer class-methode nicht akzeptier? 
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}