class World{ 
    character = new Character();
    healthBar = new HealthBar();
    projectile = [new Shot()];
    pID = 0;
    level = level1;
    canvas;
    keyboard;
    ctx;
    camera_x = 0;
    highScore = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.ctx.font = "50px Arial";
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
    }
    setWorld(){
        this.character.world = this;
    }
    run(){
        setInterval(() => {
            this.checkCollitionsEnemyTank();
            this.checkCollitionsEnemyHover();
            this.checkCollitionsItem();
        }, 200);
    }
    checkCollitionsEnemyTank(){
        this.level.enemiesTank.forEach((unit) => {
            let unitID = this.level.enemiesTank.indexOf(unit);
            if (this.character.isColliding(unit) && this.character.midAir == true) {
                this.level.enemiesTank.splice(unitID,1);
                this.character.jump(20);
            } else if (this.character.isColliding(unit)) {
                this.character.lifePoints -= 10;
                this.healthBar.setHealth(this.character.lifePoints);
                this.character.hit = true;
            }
        }) 
    }
    checkCollitionsEnemyHover(){
        this.level.enemiesHover.forEach((unit) => {
            let unitID = this.level.enemiesHover.indexOf(unit);
            if (this.character.isColliding(unit)) {
                this.character.lifePoints -= 10;
                this.healthBar.setHealth(this.character.lifePoints);
                this.character.hit = true;
            } else if (this.projectile[this.pID].isColliding(unit)) {
                this.level.enemiesHover.splice(unitID,1);
                this.projectile.splice(this.pID,1);
            }
        }) 
    }
    checkCollitionsItem(){
        this.level.coins.forEach((unit) => {
            let itemID = this.level.coins.indexOf(unit);
            if (this.character.isColliding(unit)) {
                this.highScore++;
                this.level.coins.splice(itemID,1);
            }
        }) 
    }
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.sky);
        this.addObjectsToMap(this.level.backgroundElements1);
        this.addObjectsToMap(this.level.backgroundElements2);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.levelDeko);
        //this.addObjectsToMap(this.level.lava);
        this.addToMap(this.character);
        this.addObjectsToMap(this.projectile);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.ctx.fillText(this.highScore,504,80);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemiesTank);
        this.addObjectsToMap(this.level.enemiesHover);
        this.addObjectsToMap(this.level.foregroundElements);
        this.ctx.translate(-this.camera_x, 0);
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
        this.drawFrame(mo);
    }
    drawFrame(mo){
        if (mo instanceof Character || mo instanceof EnemyHover || mo instanceof EnemyTank || mo instanceof Coins || mo instanceof Shot) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'blue';
            this.ctx.rect(mo.hitOffset_x, mo.hitOffset_y, mo.hitWidth, mo.hitHeight);
            this.ctx.stroke();
        };
    }
}