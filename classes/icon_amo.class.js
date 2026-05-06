class IconAmo extends DrawableObject{

    icon_amo = [
        './assets/ui/icon_amo.png'
    ];

    constructor(){
        super();
        this.loadImages(this.icon_amo);
        let imgPath = this.icon_amo[0];
        this.img = this.imageCache[imgPath];

        this.position_x = 35;
        this.position_y = 125;
        this.height = 50;
        this.width = 50;
    }
}