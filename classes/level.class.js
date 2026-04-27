class Level {
    enemies;
    levelDeko;
    sky;
    backgroundElements1;
    backgroundElements2;
    platforms;
    foregroundElements;

    constructor(enemies, levelDeko, sky, backgroundElements1, backgroundElements2, platforms, foregroundElement){
        this.enemies = enemies;
        this.levelDeko = levelDeko;
        this.sky = sky;
        this.backgroundElements1 = backgroundElements1;
        this.backgroundElements2 = backgroundElements2;
        this.platforms = platforms;
        this.foregroundElements = foregroundElement;
    }
}