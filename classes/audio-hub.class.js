/**
 * Creates new audio sounds.
 */
class AudioHub {
    static Walk = new Audio('./assets/sounds/sound_walk.wav');
    static Shot = new Audio('./assets/sounds/sound_laser_hero.wav');
    static Coin = new Audio('./assets/sounds/sound_collect-coin.wav');
    static Amo = new Audio('./assets/sounds/sound_reload.wav');
    static Hit = new Audio('./assets/sounds/sound_hit.wav');
    static UISelect = new Audio('./assets/sounds/sound_select.wav');

    /**
     * Controls sound volume and play time. 
     * @param {string} sound - Get sound effect via link. 
     */
    static playSound(sound) {
        sound.volume = effectVolume;
        sound.currentTime = 0;
        sound.play();
    }

    /**
     * Pauses sound effect.
     * @param {string} sound 
     */
    static stopSound(sound) {
        sound.pause();
    }
}
