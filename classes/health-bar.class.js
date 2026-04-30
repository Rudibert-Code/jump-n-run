class HealthBar extends DrawableObject{

    assets = [
        'assets/ui/hp_bar/hp_5.png',
        'assets/ui/hp_bar/hp_4.png',
        'assets/ui/hp_bar/hp_3.png',
        'assets/ui/hp_bar/hp_2.png',
        'assets/ui/hp_bar/hp_1.png',
        'assets/ui/hp_bar/hp_0.png',
    ];

    healthTotal = 100;

    constructor(){
        super();
        this.loadImages(this.assets);
        this.setHealth(100);
        this.position_x = 100;
        this.position_y = 100;
    }

    setHealth(percent){
        this.healthTotal = percent;
        let imgPath = this.assets[this.healthBarIndex()];
        this.img = this.imageCache[imgPath];
        console.log(this.healthTotal);
    }

    healthBarIndex(){
        if (this.healthTotal == 100) {
            return 5;
        } else if (this.healthTotal == 80) {
            return 4;
        } else if (this.healthTotal == 60) {
            return 3;
        } else if (this.healthTotal == 40) {
            return 2;
        } else if (this.healthTotal == 20) {
            return 1;
        } else {
            return 0;
        }
    }
}