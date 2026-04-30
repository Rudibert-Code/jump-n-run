class HealthBar extends DrawableObject{

    assets = [
        'assets/ui/hp_heart-base.png',
        'assets/ui/hp_heart-base.png',
        'assets/ui/heart-icon.png'
    ];

    healthTotal = 100;

    constructor(){
        this.loadImages(this.assets);
    }

    setHealth(percent){
        this.healthTotal = percent;
        let imgPath = this.assets[this.healthBarIndex()];
        this.img = this.imageCache[imgPath];
        console.log(this.healthTotal);
    }

    healthBarIndex(){
        if (this.healthTotal == 100) {
            return 0;
        } else if (this.healthTotal == 80) {
            return 1;
        } else if (this.healthTotal == 60) {
            return 2;
        } else if (this.healthTotal == 40) {
            return 3;
        } else if (this.healthTotal == 20) {
            return 4;
        } else {
            return 5;
        }
    }
}