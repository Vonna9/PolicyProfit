import './style.css'
import Phaser from 'phaser' 

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super("themainmenu");
  }
  preload () {
    this.load.image('Main Menu', '/assets/MainMenu.png');
  }
  create() {
    this.add.image(400,300, 'Main Menu');
  }
 
}