/**
 * Create new level elements
 */
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

    /**
     * Load level elements
     * @param {string} levelTheme - level audio
     * @param {Array} enemiesTank - Enemy Tank
     * @param {Array} enemiesHover - Enemy Hover
     * @param {Array} enemiesBoss - Boss
     * @param {Array} levelDeko - Level deko
     * @param {Array} sky - Sky bg element
     * @param {Array} backgroundElements1 - BG1 bg element
     * @param {Array} backgroundElements2 - BG2 bg element
     * @param {Array} platforms - Platforms level element
     * @param {Array} foregroundElement - FG bg element
     * @param {Array} coins - Coin collectible element 
     * @param {Array} amo - Amo collectible element
     * @param {Array} lava - Hazardous level element
     */
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