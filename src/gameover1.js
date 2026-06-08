import './style.css'
import Phaser from 'phaser' 


export default class GameOver1 extends Phaser.Scene {
  constructor() {
    super('gameover1');
  }

preload () {
this.load.audio("gameOversound", '/assets/gameOver.wav');
}
create () {

this.sound.play('gameOversound', {
      volume: 0.3,
      loop: true
    });
 
  }
}