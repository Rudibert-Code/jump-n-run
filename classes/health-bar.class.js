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
        this.position_x = 25;
        this.position_y = 25;
        this.height = 72;
        this.width = 400;
    }

    setHealth(LP){
        this.healthTotal = LP;
        let imgPath = this.assets[this.healthBarIndex()];
        this.img = this.imageCache[imgPath];
        console.log("new HP", this.healthTotal);
    }

    healthBarIndex(){
        if (this.healthTotal <= 100 && this.healthTotal >= 81) {
            return 0;
        } else if (this.healthTotal <= 80 && this.healthTotal >= 61) {
            return 1;
        } else if (this.healthTotal <= 60 && this.healthTotal >= 41) {
            return 2;
        } else if (this.healthTotal <= 40 && this.healthTotal >= 21) {
            return 3;
        } else if (this.healthTotal <= 20 && this.healthTotal >= 1) {
            return 4;
        } else {
            return 5;
        }
    }
}