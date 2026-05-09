class AudioHub {
    static Theme = new Audio('./assets/sounds/melody.wav');

    static playSound(sound) {
        sound.volume = 0.5;
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

    //static objSetVolume(volumeSlider) {
    //    let volumeValue = document.getElementById('volume').value;  // Holt den aktuellen Lautstärkewert aus dem Inputfeld
    //    volumeSlider.forEach(sound => {
    //        sound.volume = volumeValue;  // Setzt die Lautstärke für jedes Audio wie im Slider angegeben
    //    });
    //}
}
