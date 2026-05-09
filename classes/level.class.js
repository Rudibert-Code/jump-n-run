class Level {
    levelTheme;
    enemiesTank;
    enemiesHover;
    enemiesBoss;
    levelDeko;
    sky;
    backgroundElements1;
    backgroundElements2;
    platforms;
    foregroundElements;
    coins; 
    amo;
    lava;

    levelEndX = 3300;

    constructor(levelTheme, enemiesTank, enemiesHover, enemiesBoss, levelDeko, sky, backgroundElements1, backgroundElements2, platforms, foregroundElement, coins, amo, lava){
        this.levelTheme = levelTheme;
        this.enemiesTank = enemiesTank;
        this.enemiesHover = enemiesHover;
        this.enemiesBoss = enemiesBoss;
        this.levelDeko = levelDeko;
        this.sky = sky;
        this.backgroundElements1 = backgroundElements1;
        this.backgroundElements2 = backgroundElements2;
        this.platforms = platforms;
        this.foregroundElements = foregroundElement;
        this.coins = coins;
        this.amo = amo;
        this.lava = lava;
    }
}