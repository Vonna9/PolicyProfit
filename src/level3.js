import './style.css'
import Phaser from 'phaser' 

class level3 extends Phaser.Scene {
  constructor() {
    super({key: "level3"})
  }
  preload () {
    this.load.image('Bank_Level_3', 'assets/Bank_Level_3.jpg');
  }
  create() {
    this.add.image(800, 600, 'Bank_Level_3');
  }
}