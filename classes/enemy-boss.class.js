class Boss1 extends MovableObject{
    boss_idle = [
        './assets/enemy/Boss/Normal/skeleton-animation_00.png',
        './assets/enemy/Boss/Normal/skeleton-animation_01.png',
        './assets/enemy/Boss/Normal/skeleton-animation_02.png',
        './assets/enemy/Boss/Normal/skeleton-animation_03.png',
        './assets/enemy/Boss/Normal/skeleton-animation_04.png',
        './assets/enemy/Boss/Normal/skeleton-animation_05.png',
        './assets/enemy/Boss/Normal/skeleton-animation_06.png',
        './assets/enemy/Boss/Normal/skeleton-animation_07.png',
        './assets/enemy/Boss/Normal/skeleton-animation_08.png',
        './assets/enemy/Boss/Normal/skeleton-animation_09.png',
        './assets/enemy/Boss/Normal/skeleton-animation_10.png',
        './assets/enemy/Boss/Normal/skeleton-animation_11.png',
        './assets/enemy/Boss/Normal/skeleton-animation_12.png',
        './assets/enemy/Boss/Normal/skeleton-animation_13.png',
        './assets/enemy/Boss/Normal/skeleton-animation_14.png',
        './assets/enemy/Boss/Normal/skeleton-animation_15.png',
        './assets/enemy/Boss/Normal/skeleton-animation_16.png',
        './assets/enemy/Boss/Normal/skeleton-animation_17.png',
        './assets/enemy/Boss/Normal/skeleton-animation_18.png',
        './assets/enemy/Boss/Normal/skeleton-animation_19.png',
        './assets/enemy/Boss/Normal/skeleton-animation_20.png',
        './assets/enemy/Boss/Normal/skeleton-animation_21.png',
        './assets/enemy/Boss/Normal/skeleton-animation_22.png',
        './assets/enemy/Boss/Normal/skeleton-animation_23.png',
    ];
    boss_hit = [
        './assets/enemy/Boss/Hit/skeleton-hit_0.png',
        './assets/enemy/Boss/Hit/skeleton-hit_1.png',
        './assets/enemy/Boss/Hit/skeleton-hit_2.png',
        './assets/enemy/Boss/Hit/skeleton-hit_3.png',
        './assets/enemy/Boss/Hit/skeleton-hit_4.png',
    ];

    lifePoints = 100;
    height = 400;
    width = 400;
    hitOffset_x;
    hitOffset_y = 260;
    hitWidth = 300;
    hitHeight = 200;
    speed = 2;
    hit = false;
    click = 0;

    constructor(imgPath, x){
        super().loadImage(imgPath);
        this.loadImages(this.boss_idle);
        this.loadImages(this.boss_hit);
        this.position_y = 250;
        this.position_x = x;
        this.animate();
    }

    animate(){
        setInterval( () => {
            this.position_x -= this.speed;
            this.setPosition();    
            if (this.position_x == 3300) {
                this.speed = -2;
            }
            if (this.position_x == 3600) {
                this.speed = 2;
            }
            if (this.hit == false) {
                this.animation(this.boss_idle);
            } else if (this.hit == true) {
                this.animation(this.boss_hit);
                this.click++
                if (this.click >= 5) {
                    this.click = 0;
                    this.hit = false;
                }
            }
        }, 1000 / 30);
    }

    animation(aniType){
        let iD = this.currentImage % aniType.length;
        let path = aniType[iD];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    setPosition(){
        this.hitOffset_x = this.position_x + 75;
    }
}