import './style.css'
import Phaser from 'phaser' 
import HUDscene from './HUDscene.js'

export default class Level1 extends Phaser.Scene {
  constructor() {
    super('level1');
  }
  preload () {
    this.load.image('Bank_Level_1', '/assets/Bank_Level_1.png');
    this.load.audio('level1music', '/assets/Walking_down_an_escalator.mp3');
  
    //rising inflation choices
    this.load.image('saleday', '/assets/Choice_Sale_day.jpg');
    this.load.image('reducefunding', '/assets/Choices_Reduce_Funding.jpg');

    //rising deflation choices
    this.load.image('makejobs', '/assets/Choices_Make_Jobs.jpg');
    this.load.image('everythingcheap', '/assets/Choices_Everything_cheap.jpg');

    //questions
    this.load.image('Q_RisingDeflation', '/assets/Question_Rising_Deflation.jpg');
    this.load.image('Q_RisingInflation', '/assets/Question_Issue_Rising_Inflation.jpg');

  }
  create() {
    this.scene.launch('HUDscene');
    this.add.image(400, 300,'Bank_Level_1');
    this.add.image(400, 80, 'Q_RisingDeflation');
   
  //choices
    let makeJobsChoice = this.add.image(250, 450, 'makejobs');
    makeJobsChoice.setInteractive().on("pointerdown", () =>  {
    this.input.on('pointerdown', () => this.sound.play('buttonClick'));
    });

    let makeEverythingCheap = this.add.image(550, 450, 'everythingcheap');
     makeEverythingCheap.setInteractive().on("pointerdown", () =>  {
    this.input.on('pointerdown', () => this.sound.play('buttonClick'));
    makeEverythingCheap = "makeEverythingCheap"; 
    });

    this.sound.play('level1music', {
      volume: 0.3,
      loop: true
    });
  }
}
function update () {
  if (makeEverythingCheap = 'makeEverythingCheap') {
  publicity_score += 25;
  inflation_score -= 10; 
  }
  else if () {

  }
}

