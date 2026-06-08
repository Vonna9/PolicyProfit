import './style.css'
import Phaser from 'phaser' 

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super("themainmenu");
  }
  preload () {
    this.load.image('Main Menu', '/assets/MainMenu.png');
    this.load.image('Start Button', '/assets/Start_Button.png');
    this.load.audio("buttonClick", '/assets/buttonPress.wav');
  }
  create() {
    
    this.add.image(400,300, 'Main Menu');
    
    let startButton = this.add.image(415, 450, 'Start Button');
    startButton.setInteractive().on("pointerdown", () => {
    this.sound.play('buttonClick');
    this.scene.switch('level1');
       });
   }
}



  
