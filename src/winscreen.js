import './style.css'
import Phaser from 'phaser' 
import HUDscene from './HUDscene.js'

export default class Winner extends Phaser.Scene {
  constructor() {
    super('winner');
  }
  preload () {

    this.load.image('WinScreen', '/assets/Bank_Level_3_Win_Screen.jpg');

  }
  create () {
    
    this.add.image(400, 300,'WinScreen');
  }
}

