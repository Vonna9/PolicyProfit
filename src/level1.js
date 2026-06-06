import './style.css'
import Phaser from 'phaser' 

export default class Level1 extends Phaser.Scene {
  constructor() {
    super('level1');
  }
  preload () {
    this.load.image('Bank_Level_1', '/assets/Bank_Level_1.png');
    this.load.audio('level1music', '/assets/Walking_down_an_escalator.mp3');
  }

  create() {
    this.add.image(400, 300,'Bank_Level_1');
    this.sound.play('level1music', {
      volume: 0.3,
      loop: true
    });
  }
}