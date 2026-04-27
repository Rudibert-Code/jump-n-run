class World{
    character = new Character();
    enemies = [
        new EnemyTank(),
        new EnemyHover(),
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
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);


        // BG elemente in richtiger reihenfolge wiedergeben
        this.ctx.drawImage(this.sky.img, this.sky.position_x, this.sky.position_y, this.sky.width, this.sky.height);
        this.ctx.drawImage(this.BG1.img, this.BG1.position_x, this.BG1.position_y, this.BG1.width, this.BG1.height);
        this.ctx.drawImage(this.BG2.img, this.BG2.position_x, this.BG2.position_y, this.BG2.width, this.BG2.height);

        this.platform.forEach(elemnts =>{
            this.ctx.drawImage(elemnts.img, elemnts.position_x, elemnts.position_y, elemnts.width, elemnts.height);
        });

        this.levelDeko.forEach(rock =>{
            this.ctx.drawImage(rock.img, rock.position_x, rock.position_y, rock.width, rock.height);
        });
        //let box = this.platform;
        //for (let index = 0; index < box.length; index++) { 
        //    this.ctx.drawImage(box.img, box.position_x + (box.width * index), box.position_y, box.width, box.height);  
        //}


        // grafik spiegeln, wenn A gedrückt ist...
            //if (this.character.otherDirection) {
            //    this.ctx.save();
            //    this.ctx.translate(this.character.img.width, 0);
            //    this.ctx.scale(-1, 1);
            //}
        this.ctx.drawImage(this.character.img, this.character.position_x, this.character.position_y, this.character.width, this.character.height);
        

        // führen den befehel für jedes element in dem array einmal aus
        this.enemies.forEach(enemy =>{
            this.ctx.drawImage(enemy.img, enemy.position_x, enemy.position_y, enemy.width, enemy.height);
        });


        // FG elemnte
        this.ctx.drawImage(this.FG.img, this.FG.position_x, this.FG.position_y, this.FG.width, this.FG.height);

        this.ctx.translate(-this.camera_x, 0);

        // ruft draw methode nach ausführung erneut auf / "this." wird in functionen innerhalb einer class-methode nicht akzeptier? 
        let self = this;

        requestAnimationFrame(function(){
            self.draw();
        });
    }
}