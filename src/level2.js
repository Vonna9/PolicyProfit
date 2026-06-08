import './style.css'
import Phaser from 'phaser' 
import HUDscene from './HUDscene.js'

export default class Level1 extends Phaser.Scene {
  constructor() {
    super('level1');
  }
  preload () {

    this.load.image('Bank_Level_1', '/assets/Bank_Level_1.png');
    this.load.audio('level2music', '/assets/bgm (1).mp3');
  
    //rising inflation choices
    this.load.image('saleday', '/assets/Choices_Sale_day.jpg');
    this.load.image('reducefunding', '/assets/Choices_Reduce_Funding.jpg');

    //rising deflation choices
    this.load.image('makejobs', '/assets/Choices_Make_Jobs.jpg');
    this.load.image('increaseprices', '/assets/Choices_Increase_Prices.jpg');

    //questions
    this.load.image('Q_RisingDeflation', '/assets/Question_Rising_Deflation.jpg');
    this.load.image('Q_RisingInflation', '/assets/Question_Rising_Inflation.jpg');

  }
  create() {
    this.input.enabled = true; 
    this.registry.set('inflation', 10);
    this.registry.set('deflation', 10);
    this.registry.set('publicity', 25);
    this.scene.launch('HUDscene');
    this.add.image(400, 300,'Bank_Level_1');

    let question1 = this.add.image(400, 100, 'Q_RisingDeflation').setVisible(true);
    let question2 = this.add.image(400, 100, 'Q_RisingInflation').setVisible(false);
    // default choices
    let increaseprices = this.add.image(250, 450, 'increaseprices').setInteractive();
    let makeJobsChoice = this.add.image(550, 450, 'makejobs').setInteractive();
   // second choices after default
    let saledayChoice = this.add.image(250, 450, 'saleday').setInteractive().setVisible(false);
    let reduceChoice = this.add.image(550, 450, 'reducefunding').setInteractive().setVisible(false);
   
    

    makeJobsChoice.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')

    this.registry.set('publicity', publicity + 25) 
    this.registry.set('inflation', inflation - 10)

    question1.setVisible(false);
    makeJobsChoice.setVisible(false);
    increaseprices.setVisible(false);

    question2.setVisible(true);
    saledayChoice.setVisible(true);
    reduceChoice.setVisible(true);
    
       });

   increaseprices.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')
    this.registry.set('publicity', publicity + 25)
    this.registry.set('inflation', inflation + 10)
    this.registry.set('deflation', deflation - 10)
    question1.setVisible(false);
    makeJobsChoice.setVisible(false);
    increaseprices.setVisible(false);

    question2.setVisible(true);
    saledayChoice.setVisible(true);
    reduceChoice.setVisible(true);
    
       });

   saledayChoice.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')

    this.registry.set('publicity', publicity + 10)
    this.registry.set('inflation', inflation - 10)
    this.registry.set('deflation', deflation + 10)
    question1.setVisible(false);
    makeJobsChoice.setVisible(false);
    increaseprices.setVisible(false);

    question2.setVisible(true);
    saledayChoice.setVisible(true);
    reduceChoice.setVisible(true);
     this.scene.switch('level2');
    
       });

  
   reduceChoice.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')

    this.registry.set('publicity', publicity - 10)
    this.registry.set('inflation', inflation - 10)
  
    question1.setVisible(false);
    makeJobsChoice.setVisible(false);
    increaseprices.setVisible(false);

    question2.setVisible(true);
    saledayChoice.setVisible(true);
    reduceChoice.setVisible(true);
     this.scene.switch('level2');
    
       });


    this.sound.stopByKey('level1music')
    this.sound.play('level2music', {
      volume: 0.3,
      loop: true
    });
  }
}
