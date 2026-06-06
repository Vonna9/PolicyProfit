import './style.css'
import Phaser from 'phaser' 

class MainMenu extends Phaser.Scene {
  constructor() {
    super({key: "level1"})
  }
  preload () {
    this.load.image('Bank_Level_1', 'assets/Bank_Level_1.png');
  }
  create() {
    this.add.image(800, 600, 'Bank_Level_1');
  }
}