import './style.css'
import Phaser from 'phaser' 

export default class Level3 extends Phaser.Scene {
  constructor() {
    super('level3');
  }
  preload () {
    this.load.image('Bank_Level_3', '/assets/Bank_Level_3.jpg');
  }
  create() {
    this.add.image(400, 300, 'Bank_Level_3');
  }
}