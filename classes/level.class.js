class Level{

    player = new Player();
    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.player.image, this.player.x, this.player.y, this.player.width, this.player.height);

        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}