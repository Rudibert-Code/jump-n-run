class World{ 
    character = new Character();
    healthBar = new HealthBar();
    level = level1;
    canvas;
    keyboard;
    ctx;
    camera_x = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.ctx.font = "50px Arial";
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.checkCollitionsEnemies();
        this.checkCollitionsCoins();
    }
    setWorld(){
        this.character.world = this;
    }

    checkCollitionsEnemies(){
        setInterval(() => {
            this.level.enemies.forEach((unit) => {
                if (this.character.isColliding(unit)) {
                    this.character.lifePoints -= 10;
                    this.healthBar.setHealth(this.character.lifePoints);
                    this.character.hit = true;
                } 
            }) 
        }, 200);
    }
    checkCollitionsCoins(){
        setInterval(() => {
            this.level.coins.forEach((unit) => {
                if (this.character.isColliding(unit)) {
                    console.log("Coins +1");
                } 
            }) 
        }, 200);
    }
    draw(){
        // Lösche alle Elemente im Level -> rendert Elemente neu
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        // Level-Elemente rendern
        this.addObjectsToMap(this.level.sky);
        this.addObjectsToMap(this.level.backgroundElements1);
        this.addObjectsToMap(this.level.backgroundElements2);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.levelDeko);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.ctx.fillText("Hello World",100,25);
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.foregroundElements);
        this.ctx.translate(-this.camera_x, 0);
        // Ruft draw() methode nach ausführung erneut auf > "this." wird in functionen innerhalb einer class-methode nicht akzeptier 
        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(element =>{
            this.addToMap(element);
        });
    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.position_x, mo.position_y, mo.width, mo.height);
        // add collider to rendered object
        this.drawFrame(mo);
    }

    drawFrame(mo){
        if (mo instanceof Character || mo instanceof EnemyHover || mo instanceof EnemyTank || mo instanceof Coins) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'blue';
            this.ctx.rect(mo.hitOffset_x, mo.hitOffset_y, mo.hitWidth, mo.hitHeight);
            this.ctx.stroke();
        };
    }
}