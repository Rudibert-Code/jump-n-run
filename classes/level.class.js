class Level {
    enemiesTank;
    enemiesHover;
    levelDeko;
    sky;
    backgroundElements1;
    backgroundElements2;
    platforms;
    foregroundElements;
    coins; 
    shot;
    lava;

    levelEndX = 1000;

    constructor(enemiesTank, enemiesHover, levelDeko, sky, backgroundElements1, backgroundElements2, platforms, foregroundElement, coins, shot, lava){
        this.enemiesTank = enemiesTank;
        this.enemiesHover = enemiesHover;
        this.levelDeko = levelDeko;
        this.sky = sky;
        this.backgroundElements1 = backgroundElements1;
        this.backgroundElements2 = backgroundElements2;
        this.platforms = platforms;
        this.foregroundElements = foregroundElement;
        this.coins = coins;
        this.shot = shot;
        this.lava = lava;
    }
}