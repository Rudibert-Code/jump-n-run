class DekoSky extends MovableObject{
    height = 200;
    width = 800;

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