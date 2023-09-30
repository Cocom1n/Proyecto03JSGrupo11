//hacer inport de sus escenas
import { menu } from "./escenas/menu.js";

let config ={
    type: Phaser.CANVAS,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 800,
        height: 600
    },
    //aqui agregar sus escenas
    scene:[menu]

}
let game = new Phaser.Game(config);