export class perdiste extends Phaser.Scene {
    constructor() {
        super({ key: 'Perdiste' });
    }

    preload() {
        this.load.image('perdiste-img', '../../public/img/perdiste_image.png');
        this.load.image('btn_repetir', '../../public/img/btn_repetir.png');
        this.load.image('btn_menu', '../../public/img/btn_menu.png');
    }

    create() {
        this.add.image(400,150,'perdiste-img');
        //Display.Color(new Color(255, 255, 255, 255));
        this.btn_repetir = this.add.image(200,400,'btn_repetir').setInteractive();
        this.btn_repetir.on('pointerdown', () =>{
            console.log("hola");
            //cambiar el nombre de la escena a la que tiene q cambiar owo
            this.scene.start('Escena1');
        });

        this.btn_menu = this.add.image(600,400,'btn_menu').setInteractive();
        this.btn_menu.on('pointerdown', () =>{
            console.log("hola 2");
            //cambiar el nombre de la escena a la que tiene q cambiar owo
            this.scene.start('menu');
        });
    }
}