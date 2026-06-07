import './style.css'
import Phaser from 'phaser' 



export default class Level1 extends Phaser.Scene {
  constructor() {
    super('level1');
  }
  preload () {
    this.load.image('Bank_Level_1', '/assets/Bank_Level_1.png');
    this.load.audio('level1music', '/assets/Walking_down_an_escalator.mp3');
  
    //current issues
    this.load.image('risingInflation', '/assets/Current_Issue_Rising_Inflation.png');
    this.load.image('risingDeflation', '/assets/Current_Issue_Rising_Deflation.png');
    this.load.image('risingDeflation', '/assets/Current_Issue_Expensive.jpg');
    //choice cards:
    //rising inflation card
    this.load.image('currentissueInflation', '/assets/Current_Issue_Rising_Inflation.png');
    this.load.image('currentissueDeflation', '/assets/Current_Issue_Rising_Deflation.png');
    //questions
    this.load.image('Q_RisingDeflation', '/assets/Question_Rising_Deflation.jpg');
    this.load.image('Q_RisingInflation', '/assets/Question_Issue_Rising_Inflation.jpg');

  }
  create() {
    
    this.add.image(400, 300,'Bank_Level_1');
    this.add.image(400, 200, 'Q_RisingDeflation');
    this.add.image(400, 200, 'Q_RisingInflation');
    this.add.image();
    this.add.image();
    this.add.image();
    this.add.image();
    this.sound.play('level1music', {
      volume: 0.3,
      loop: true
    });
  }
}

function RisingInflation (answer) {
if () {
  }
else if () {

}
}

function RisingDeflation (answer) {
if () {
  }
}