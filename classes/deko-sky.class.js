class DekoSky extends MovableObject{
    height = 200;
    width = 800;

        constructor(){
        super().loadImage('./assets/level/deko/BG_1_rocks1.png');

        this.position_x = 700;
        this.position_y = 10;

        this.animate();
    }

    animate(){
        setInterval( () => {
            this.position_x --;
        }, 1000 / 30);
    }
}