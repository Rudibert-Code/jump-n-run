class World{ 
    character = new Character();
    enemies = [
        new EnemyTank(),
        new EnemyHover(),
    ];
    levelDeko = [
        new DekoSky('./assets/level/deko/BG_1_rocks1.png', 1000, 5),
        new DekoSky('./assets/level/deko/BG_1_rocks2.png', 2000, 8),
        new DekoSky('./assets/level/deko/BG_1_rocks1.png', 3000, 5),
        new DekoSky('./assets/level/deko/BG_1_rocks2.png', 5000, 13),
    ];
    sky = [
        new Sky('./assets/level/deko/BG.png', 0, 0),
        new Sky('./assets/level/deko/BG.png', 1080, 0)
    ];
    backgroundElements1 = [
        new BG1('./assets/level/deko/BG1.png', 0, 344),
        new BG1('./assets/level/deko/BG1.png', 800, 344),
    ];
    backgroundElements2 = [
        new BG2('./assets/level/deko/BG2.png', 0, 331),
        new BG2('./assets/level/deko/BG2.png', 1080, 331),
        new BG2('./assets/level/deko/BG2.png', 2160, 331),
        new BG2('./assets/level/deko/BG2.png', 3240, 331),
    ];
    platforms = [
        new Platform(),
    ];
    foregroundElements = [
        new FG()
    ];
    canvas;
    keyboard;
    ctx;
    camera_x = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
    }
    setWorld(){
        this.character.world = this;
    }
    draw(){
        // Lösche alle Elemente im Level > schafft Platz um Elemente auf anderer Position neu zu rendern
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        // Level-Elemente rendern
        this.addToMap(this.sky);
        this.addObjectsToMap(this.backgroundElements1);
        this.addObjectsToMap(this.backgroundElements2);
        this.addObjectsToMap(this.platforms);
        this.addObjectsToMap(this.levelDeko);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.foregroundElements);

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
    }
}