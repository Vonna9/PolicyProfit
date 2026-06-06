import './style.css'
import Phaser from 'phaser' 

 class MainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }
  preload () {
    this.load.image('Main Menu', 'assets/MainMenu.png');
    this.load.image('Bank_Level_1', 'assets/Bank_Level_Concept(FrontPage).png');
    this.load.image('Bank_Level_2', 'assets/Bank_Leve2_Concept(Updated).png');
    this.load.image('Bank_Level_3', 'assets/Bank_Leve3_Concept(Updated).png');
    this.load.image('Start Button', 'assets/Policy_Profit_Start_Button.png');
    
  }

  create () {
    this.add.image(800, 600, 'Main Menu');
    this.add.image(800, 600, 'Bank_Level_1');
    this.add.image(800, 600, 'Bank_Level_2');
    this.add.image(800, 600, 'Bank_Level_3');
    this.add.image(200, 50, 'Bank_Level_3');
  }
 }
 
 var game = new Phaser.Game(config);