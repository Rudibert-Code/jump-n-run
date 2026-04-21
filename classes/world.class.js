class World{
    character = new Character();
    enemies = [
        new EnemyTank(),
        new EnemyTank(),
        new EnemyTank(),
    ];
    levelDeko = [
        new DekoSky(),
    ];
    platform = [
        new Platform(),
    ];

    sky = new Sky();
    BG1 = new BG1();
    BG2 = new BG2();
    FG = new FG();

    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        // BG elemente in richtiger reihenfolge wiedergeben
        this.ctx.drawImage(this.sky.img, this.sky.position_x, this.sky.position_y, this.sky.width, this.sky.height);
        this.ctx.drawImage(this.BG1.img, this.BG1.position_x, this.BG1.position_y, this.BG1.width, this.BG1.height);
        this.ctx.drawImage(this.BG2.img, this.BG2.position_x, this.BG2.position_y, this.BG2.width, this.BG2.height);


        this.platform.forEach(elemnts =>{
            this.ctx.drawImage(elemnts.img, elemnts.position_x, elemnts.position_y, elemnts.width, elemnts.height);
        });


        this.ctx.drawImage(this.character.img, this.character.position_x, this.character.position_y, this.character.width, this.character.height);
        

        // führen den befehel für jedes element in dem array einmal aus
        this.enemies.forEach(enemy =>{
            this.ctx.drawImage(enemy.img, enemy.position_x, enemy.position_y, enemy.width, enemy.height);
        });


        // FG elemnte
        this.ctx.drawImage(this.FG.img, this.FG.position_x, this.FG.position_y, this.FG.width, this.FG.height);


        // ruft draw methode nach ausführung erneut auf / "this." wird in functionen innerhalb einer class-methode nicht akzeptier? 
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}