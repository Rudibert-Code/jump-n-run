class Player extends MovableObject{

    constructor(){
        for (let index = 0; index < 15; index++) {
            let imgLinkID = index;
            if (imgLinkID <= 9) {
                imgLinkID = "0" + imgLinkID;
            }
            let imgLink = "./assets/idle/skeleton-idle_" + imgLinkID + ".png";
            super().idle(imgLink);
            
        }
       //super().idle('./assets/idle/skeleton-idle_00.png');
    }
}