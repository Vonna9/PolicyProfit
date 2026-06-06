import './style.css'
import Phaser from 'phaser' 

export default class Level1 extends Phaser.Scene {
  constructor() {
    super('level1');
  }
  preload () {
    this.load.image('Bank_Level_1', '/assets/Bank_Level_1.png');
  }
  create() {
    this.add.image(400, 300,'Bank_Level_1');
  }
}