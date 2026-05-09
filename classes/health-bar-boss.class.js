class HealthBarBoss extends DrawableObject{

    assets = [
        'assets/enemy/Boss/health-bar/b_hp5.png',
        'assets/enemy/Boss/health-bar/b_hp4.png',
        'assets/enemy/Boss/health-bar/b_hp3.png',
        'assets/enemy/Boss/health-bar/b_hp2.png',
        'assets/enemy/Boss/health-bar/b_hp1.png',
        'assets/enemy/Boss/health-bar/b_hp0.png',
        'assets/enemy/Boss/health-bar/non.png',
    ];

    healthTotal = 100;

    constructor(){
        super();
        this.loadImages(this.assets);
        this.inActive();
        this.position_x = 154;
        this.position_y = 600;
        this.height = 70;
        this.width = 700;
    }

    inActive(){
        let imgPath = this.assets[6];
        this.img = this.imageCache[imgPath];
    }

    setHealth(LP){
        this.healthTotal = LP;
        let imgPath = this.assets[this.healthBarIndex()];
        this.img = this.imageCache[imgPath];
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