const level1 = new Level(
    [
        new EnemyTank(),
    ],
    [
        new EnemyHover(),
    ],
    [
        new DekoSky('./assets/level/deko/BG_1_rocks1.png', 1000, 5),
        new DekoSky('./assets/level/deko/BG_1_rocks2.png', 2000, 8),
        new DekoSky('./assets/level/deko/BG_1_rocks1.png', 3000, 5),
        new DekoSky('./assets/level/deko/BG_1_rocks2.png', 5000, 13),
    ],
    [
        new Sky('./assets/level/deko/BG.png', -1080, 0),
        new Sky('./assets/level/deko/BG.png', 0, 0),
        new Sky('./assets/level/deko/BG.png', 1080, 0)
    ],
    [
        new BG1('./assets/level/deko/BG1.png', -800, 344),
        new BG1('./assets/level/deko/BG1.png', 0, 344),
        new BG1('./assets/level/deko/BG1.png', 800, 344),
    ],
    [
        new BG2('./assets/level/deko/BG2.png', -1080, 331),
        new BG2('./assets/level/deko/BG2.png', 0, 331),
        new BG2('./assets/level/deko/BG2.png', 1080, 331),
        new BG2('./assets/level/deko/BG2.png', 2160, 331),
        new BG2('./assets/level/deko/BG2.png', 3240, 331),
    ],
    [
        new Platform(),
    ],
    [
        new FG()
    ],
        [
        new Coins(),
        new Coins(),
        new Coins()
    ],
);