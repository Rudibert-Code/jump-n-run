class Level{

    player = new Player();

    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.spawn();
    }

    spawn(){
        this.ctx.drawImage(this.player.image, this.player.x, this.player.y, 40, 40);
    }
}