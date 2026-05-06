class IconCoin extends DrawableObject{

    icon_coin = [
        './assets/ui/icon_coin.png'
    ];

    constructor(){
        super();
        this.loadImages(this.icon_coin);
        let imgPath = this.icon_coin[0];
        this.img = this.imageCache[imgPath];

        this.position_x = 490;
        this.position_y = 38;
        this.height = 50;
        this.width = 50;
    }
}