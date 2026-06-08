import './style.css'
import Phaser from 'phaser' 
import HUDscene from './HUDscene.js'

export default class Level3 extends Phaser.Scene {
  constructor() {
    super('level3');
  }
  preload () {

    this.load.image('Bank_Level_3', '/assets/Bank_Level_3.jpg');
    this.load.audio('level2music', '/assets/bgm (1).mp3');
  
    //strike
    this.load.image('firepeople', '/assets/Choices_Fire_People.jpg');
    this.load.image('wageinc', '/assets/Choices_Increase_Wages.jpg');

    //money becoming worthless 
    this.load.image('stopprinting', '/assets/Choice_Stop_Print.jpg');
    this.load.image('priceinc', '/assets/Choices_Increase_Prices.jpg');

    //questions
    this.load.image('Q_strike', '/assets/Question_Strike_Title.jpg');
    this.load.image('Q_moneyvalue', '/assets/Current_Issue_Money_worthless.jpg');

  }
  create() {
    this.input.enabled = true; 
    this.registry.set('inflation', 10);
    this.registry.set('deflation', 10);
    this.registry.set('publicity', 25);
    this.scene.launch('HUDscene');
    this.add.image(400, 300,'Bank_Level_3');

    let question1 = this.add.image(400, 100, 'Q_strike').setVisible(true);
    let question2 = this.add.image(400, 100, 'Q_moneyvalue').setVisible(false);
    // default choices
    let stopprint = this.add.image(250, 450, 'stopprinting').setInteractive();
    let priceinc = this.add.image(550, 450, 'priceinc').setInteractive();
   // second choices after default
    let firepeople = this.add.image(250, 450, 'firepeople').setInteractive().setVisible(false);
    let wageinc = this.add.image(550, 450, 'wageinc').setInteractive().setVisible(false);
   
    

    stopprint.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')
    this.registry.set('publicity', publicity + 25) 
    this.registry.set('inflation', inflation - 10)
    this.registry.set('deflation', deflation - 10)
    question1.setVisible(false);
    stopprint.setVisible(false);
    priceinc.setVisible(false);

    question2.setVisible(true);
    firepeople.setVisible(true);
    wageinc.setVisible(true);
    
       });

   priceinc.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')
    this.registry.set('publicity', publicity - 10)
    this.registry.set('inflation', inflation - 5)
    this.registry.set('deflation', deflation + 10)
   
    question1.setVisible(false);
    stopprint.setVisible(false);
    priceinc.setVisible(false);

    question2.setVisible(true);
    firepeople.setVisible(true);
    wageinc.setVisible(true);
    
       });

   firepeople.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')

    this.registry.set('publicity', publicity + 20)
    this.registry.set('inflation', inflation - 20)
    this.registry.set('deflation', deflation + 20)

    question1.setVisible(false);
    stopprint.setVisible(false);
    priceinc.setVisible(false);

    question2.setVisible(true);
    firepeople.setVisible(true);
    wageinc.setVisible(true);
    this.scene.switch('winner');
       });

  
   wageinc.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')

    this.registry.set('publicity', publicity - 20)
    this.registry.set('inflation', inflation + 20)
   this.registry.set('deflation', deflation - 10)
    question1.setVisible(false);
    stopprint.setVisible(false);
    priceinc.setVisible(false);

    question2.setVisible(true);
    firepeople.setVisible(true);
    wageinc.setVisible(true);
    this.scene.switch('winner');
    
       });


  
  }
}
