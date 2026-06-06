import './style.css'
import Phaser from 'phaser' 

class MainMenu extends Phaser.Scene {
  constructor() {
    super({key: "level2"})
  }
  preload () {
    this.load.image('Bank_Level_2', 'assets/Bank_Level_2.jpg');
  }
  create() {
    this.add.image(800, 600, 'Bank_Level_2');
  }
}