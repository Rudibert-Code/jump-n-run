class World{ 
    character = new Character();
    healthBar = new HealthBar();
    healthBarBoss = new HealthBarBoss();
    iconCoin = new IconCoin();
    iconAmo = new IconAmo();
    projectile = [new Shot()];
    projectileEnemy = [new EnemyShot()];
    movingAmo = [new AmoTwo()];
    destroy = [new Destroy()];
    pID = 0;
    epID = 0;
    aID = 0;
    level = level1;
    canvas;
    keyboard;
    ctx;
    camera_x = 0;
    highScore = 0;
    amoNumber = 0;
    bossFight = false;
    bossCoolDown = 0;
    win = false;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.ctx.font = "50px Arial";
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
        this.run();
        this.playTheme();
    }
    setWorld(){
        document.getElementById('theme-player').src = this.level.levelTheme;
        this.character.world = this;
    }
    run(){
        setInterval(() => {
            this.checkCollitionsEnemyTank();
            this.checkCollitionsEnemyHover();
            this.checkCollitionsEnemyBoss();
            this.checkCollitionsItem();
            this.checkCollitionsEnemyBossAttack();
            this.checkCollitionsLava();
            this.checkPlayerLocation();
            if (this.character.outOfBounds == true) {
                this.gameOver(1);   
            }
            if (this.bossFight == true) {
                this.bossAttacks();
            }
        }, 1000/30);
    }
    playTheme(){
        let audioSorce = document.getElementById('theme-player');
        audioSorce.loop = true;
        audioSorce.volume = 0.2;
        audioSorce.play();
    }
    checkCollitionsEnemyTank(){
        this.level.enemiesTank.forEach((unit) => {
            let unitID = this.level.enemiesTank.indexOf(unit);
            if (this.character.isColliding(unit) && this.character.midAir == true) {
                this.destroyEnemyUnit(unit);
                this.level.enemiesTank.splice(unitID,1);
                this.character.jump(20);
            } else if (this.character.isColliding(unit)) {
                this.character.lifePoints -= 20;
                this.healthBar.setHealth(this.character.lifePoints);
                this.character.hit = true;
            }
            if (this.level.lava[1].isColliding(unit)) {
                this.destroyEnemyUnit(unit);
                AudioHub.playSound(AudioHub.Hit);
                this.level.enemiesTank.splice(unitID,1);
            }
        }) 
    }
    checkCollitionsEnemyHover(){
        this.level.enemiesHover.forEach((unit) => {
            let unitID = this.level.enemiesHover.indexOf(unit);
            if (this.character.isColliding(unit)) {
                this.character.lifePoints -= 20;
                this.healthBar.setHealth(this.character.lifePoints);
                this.character.hit = true;
            } else if (this.projectile[this.pID].isColliding(unit)) {
                this.destroyEnemyUnit(unit);
                AudioHub.playSound(AudioHub.Hit);
                this.level.enemiesHover.splice(unitID,1);
                this.projectile.splice(this.pID,1);
                this.pID = 0;
            }
        }) 
    }
    checkCollitionsEnemyBoss(){
        this.level.enemiesBoss.forEach((unit) => {
            let unitID = this.level.enemiesBoss.indexOf(unit);
            if (this.projectile[this.pID].isColliding(unit)) {
                unit.lifePoints -= 20;
                this.healthBarBoss.setHealth(unit.lifePoints);
                unit.hit = true;
                this.projectile.splice(this.pID,1);
                this.pID = 0;
                if (unit.lifePoints == 0) {
                    this.bossFight = false;
                    this.win = true;
                    this.level.enemiesBoss.splice(unitID,1);
                    document.getElementById('theme-player').pause();
                    this.gameOver(2);
                }
            }
        }) 
    }
    checkCollitionsEnemyBossAttack(){
        let attack = this.projectileEnemy[this.epID];
        if (this.character.isColliding(attack)){
                this.character.lifePoints -= 40;
                this.healthBar.setHealth(this.character.lifePoints);
                this.character.hit = true;
                this.projectileEnemy.splice(this.epID,1);
                this.epID = 0;
            }
    }
    checkCollitionsItem(){
        this.level.coins.forEach((unit) => {
            let coinID = this.level.coins.indexOf(unit);
            if (this.character.isColliding(unit)) {
                AudioHub.playSound(AudioHub.Coin);
                this.highScore++;
                this.level.coins.splice(coinID,1);
            }
        }) 
        this.level.amo.forEach((unit) => {
            let amoID = this.level.amo.indexOf(unit);
            if (this.character.isColliding(unit)) {
                AudioHub.playSound(AudioHub.Amo);
                this.amoNumber++;
                this.level.amo.splice(amoID,1);
            }
        }) 
        let moAmo = this.movingAmo[this.aID];
        if (this.character.isColliding(moAmo)){
                AudioHub.playSound(AudioHub.Amo);
                this.amoNumber++;
                this.movingAmo.splice(this.aID,1);
                this.aID = 0;
            }
    }
    checkCollitionsLava(){
        this.level.lava.forEach((unit) => {
            if (this.character.isColliding(unit)) {
                this.character.lifePoints = 0;
                this.healthBar.setHealth(this.character.lifePoints);
            }
        }) 
    }
    destroyEnemyUnit(unit){
        let enemyLocation = new Destroy(unit.position_x, unit.position_y);
        this.destroy.push(enemyLocation);
    }
    gameOver(x){
        if (x == 1) {
            document.getElementById('screen-graphic').src ='./assets/ui/screens/EndScreen.jpg';
            this.character.reset = true;
        } else if (x == 2) {
            document.getElementById('screen-graphic').src ='./assets/ui/screens/WinScreen.jpg';
        }
        document.getElementById('screen-graphic').classList.remove("hide");
        document.getElementById('button').classList.remove("hide");
        document.getElementById('startButton').innerHTML = "RE-START";
    }
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.sky);
        this.addObjectsToMap(this.level.backgroundElements1);
        this.addObjectsToMap(this.level.backgroundElements2);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.enemiesBoss);
        this.addObjectsToMap(this.level.lava);
        this.addObjectsToMap(this.level.levelDeko);
        this.addToMap(this.character);
        this.addObjectsToMap(this.projectile);
        this.addObjectsToMap(this.projectileEnemy);
        this.addObjectsToMap(this.movingAmo);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.healthBarBoss);
        this.addToMap(this.iconAmo);
        this.addToMap(this.iconCoin);
        this.ctx.fillText(this.highScore,560,80);
        this.ctx.fillText(this.amoNumber,110,170);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.amo);
        this.addObjectsToMap(this.level.enemiesTank);
        this.addObjectsToMap(this.level.enemiesHover);
        this.addObjectsToMap(this.destroy);
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
        if (mo instanceof Character || mo instanceof EnemyHover || mo instanceof EnemyTank || mo instanceof Coins ||  mo instanceof Amo || mo instanceof Shot || mo instanceof EnemyShot || mo instanceof Lava || mo instanceof Boss1) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'blue';
            this.ctx.rect(mo.hitOffset_x, mo.hitOffset_y, mo.hitWidth, mo.hitHeight);
            this.ctx.stroke();
        };
    }
    checkPlayerLocation(){
        if (this.character.position_x >= 3000 && this.bossFight == false && this.win == false) {
            this.bossFight = true;
            this.healthBarBoss.setHealth(100);
        }
    }
    bossAttacks(){
        if (this.bossCoolDown == 0 && this.bossFight == true) {
            let rng = Math.random()*10;
            if (rng <= 8) {
                this.bossShot(1);
            } else{
                this.bossShot(2);
            }
        }
        this.bossCoolDown++
        if (this.bossCoolDown == 60) {
            this.bossCoolDown = 0;
        }
    }
    bossShot(x){
        let bossX = this.level.enemiesBoss[0].position_x;
        let bossY = this.level.enemiesBoss[0].position_y;
        let shot = new EnemyShot(bossX,bossY);
        let reload = new AmoTwo(bossX,bossY);
        if (x == 1) {
            this.epID++
            this.projectileEnemy.push(shot);
        } else if (x== 2) {
            this.aID++
            this.movingAmo.push(reload);
        }
    }
}