const level1 = new Level(
    [
        new EnemyTank(),
    ],
    [
        new EnemyHover('./assets/enemy/unit_1/0.png',480),
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
        new Sky('./assets/level/deko/BG.png', 1080, 0),
        new Sky('./assets/level/deko/BG.png', 2160, 0),
        new Sky('./assets/level/deko/BG.png', 3240, 0)
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
        new Platform('./assets/level/platform.png', -120, 570),
        new Platform('./assets/level/platform.png', 180, 570),
        new Platform('./assets/level/platform.png', 780, 570),
        new Platform('./assets/level/platform.png', 1080, 570),
        //new Platform('./assets/level/platform.png', 1380, 570),
        new Platform('./assets/level/platform.png', 1680, 570),
        new Platform('./assets/level/platform.png', 1980, 570),
        new Platform('./assets/level/platform.png', 2280, 570),
        new Platform('./assets/level/platform.png', 2580, 570),
        new Platform('./assets/level/platform.png', 2880, 570),
    ],
    [
        new FG()
    ],
    [
        new Coins('./assets/ui/ani_coin/1.png',290, 450),
        new Coins('./assets/ui/ani_coin/1.png',890, 450),
    ],
    [
        new Amo(),
    ],
    [
        new Lava('./assets/level/hazard/lava/0.png', 480, 570),
        new Lava('./assets/level/hazard/lava/0.png', 1380, 570),
        new Lava('./assets/level/hazard/lava/0.png', 3179, 570),
        new Lava('./assets/level/hazard/lava/0.png', 3479, 570),
        new Lava('./assets/level/hazard/lava/0.png', 3779, 570),
    ]
);