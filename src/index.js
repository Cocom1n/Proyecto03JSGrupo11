//hacer import de sus escenas
import { menu } from "./escenas/menu.js";
import { perdiste } from "./escenas/perdiste.js";
import Escena1 from "./escenas/escenas1.js";


let config ={
    type: Phaser.CANVAS,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 800,
        height: 600
    },

            physics:{
                default:'arcade',
                arcade: { gravity:{y:300} }
            },

    //aqui agregar sus escenas

    scene:[menu, Escena1, perdiste]

}
let game = new Phaser.Game(config);