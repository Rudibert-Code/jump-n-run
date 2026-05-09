class AudioHub {
    static Walk = new Audio('./assets/sounds/sound_walk.wav');
    static Shot = new Audio('./assets/sounds/sound_laser_hero.wav');
    static Coin = new Audio('./assets/sounds/sound_collect-coin.wav');
    static Amo = new Audio('./assets/sounds/sound_reload.wav');
    static Hit = new Audio('./assets/sounds/sound_hit.wav');
    static UISelect = new Audio('./assets/sounds/sound_select.wav');
    
    static playSound(sound) {
        sound.volume = 0.2;
        sound.currentTime = 0;
        sound.play();
    }

    //static playOne(sound) {
    //    setInterval(() => {
    //        if (sound.readyState == 4) {
    //            console.log("Sound ready"); 
    //            sound.volume = 0.1;
    //            sound.currentTime = 0;
    //            sound.play();
    //        } else {
    //            console.log("Sound not ready"); 
    //        }
    //    }, 200);
    //}

    static stopSound(sound) {
        sound.pause();
    }
}
