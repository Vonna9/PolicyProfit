import './style.css'
import Phaser from 'phaser' 

export default class Level2 extends Phaser.Scene {
  constructor() {
    super('level2');
  }
  preload () {
    this.load.image('Bank_Level_2', '/assets/Bank_Level_2.jpg');
  }
  create() {
    this.add.image(400, 300,'Bank_Level_2');
  }
}