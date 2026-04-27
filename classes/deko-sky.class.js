class DekoSky extends MovableObject{
    devi = Math.random() * 30;
    height = 200 - this.devi;
    width = 800 - this.devi;

        constructor(imgPath, x, y){
        super().loadImage(imgPath);

        this.position_x = x;
        this.position_y = y;

        this.animate();
    }

    animate(){
        setInterval( () => {
            this.position_x --;
        }, 1000 / 30);
    }
}