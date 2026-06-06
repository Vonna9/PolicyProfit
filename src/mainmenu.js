import './style.css'
import Phaser from 'phaser' 

class MainMenu extends Phaser.Scene {
  constructor() {
    super({key: "mainmenu"})
  }
  preload () {
    this.load.image('Main Menu', 'assets/MainMenu.png');
  }
  create() {
    this.add.image(800, 600, 'Main Menu');
    this.scene.start();
  }
  update() {
    
  }
}