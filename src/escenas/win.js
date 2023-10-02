export class win extends Phaser.Scene {
    constructor() {
      super({ key: 'win' });
    }
}

preload() {
    this.load.image('fondowin', '../../public/img/fondowin.png');
}
 // use el mismo boton para volver a jugar
this.botoninicio = this.add.image(400,400,'boton1').setInteractive();
      this.botoninicio.on('pointerdown', () =>{
        console.log("hola");
        //cambiar el nombre de la escena a la que tiene q cambiar owo
        this.scene.start('menu');
      });
