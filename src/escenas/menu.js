export class menu extends Phaser.Scene {
    constructor() {
      super({ key: 'menu' });
    }
  
    preload() {
      this.load.image('fondo-cielo', '../../public/img/fondo-cielo.png');
      this.load.image('boton1', '../../public/img/boton.png');
    }
  
    create() {
      this.add.image(400,300,'fondo-cielo');

      this.botoninicio = this.add.image(400,400,'boton1').setInteractive();
      this.botoninicio.on('pointerdown', () =>{
        console.log("hola");
        //cambiar el nombre de la escena a la que tiene q cambiar owo
        this.scene.start('menu');
      });

    }
  
    //update() {
    //    }
  
  }
