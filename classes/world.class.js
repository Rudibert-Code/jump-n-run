class World{ 
    character = new Character();

    level = level1;
    //enemies = level1.enemies;
    //levelDeko = level1.levelDeko;
    //sky = level1.sky;
    //backgroundElements1 = level1.backgroundElements1;
    //backgroundElements2 = level1.backgroundElements2;
    //platforms = level1.platforms;
    //foregroundElements = level1.foregroundElements;

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
        this.addObjectsToMap(this.level.sky);
        this.addObjectsToMap(this.level.backgroundElements1);
        this.addObjectsToMap(this.level.backgroundElements2);
        this.addObjectsToMap(this.level.platforms);
        this.addObjectsToMap(this.level.levelDeko);
        this.addToMap(this.character);
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
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(mo.position_x, mo.position_y, mo.width, mo.height);
        this.ctx.stroke();
    }

    
}