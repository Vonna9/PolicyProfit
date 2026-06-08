import './style.css'
import Phaser from 'phaser' 
import HUDscene from './HUDscene.js'

export default class Level2 extends Phaser.Scene {
  constructor() {
    super('level2');
  }
  preload () {

    this.load.image('Bank_Level_2', '/assets/Bank_Level_2.jpg');
    this.load.audio('level2music', '/assets/bgm (1).mp3');
  
    //no jobs
    this.load.image('firepeople', '/assets/Choices_Fire_People.jpg');
    this.load.image('makejobs', '/assets/Choices_Make_Jobs.jpg');

    //flu season 
    this.load.image('work_flu', '/assets/Choices_Work_Flu_Season.jpg');
    this.load.image('quarantine', '/assets/Choices_Quarantine.jpg');

    //questions
    this.load.image('Q_Flu', '/assets/Question_Flu.jpg');
    this.load.image('Q_NoJobs', '/assets/Question_No_Jobs.jpg');

  }
  create() {
    this.input.enabled = true; 
    this.registry.set('inflation', 10);
    this.registry.set('deflation', 10);
    this.registry.set('publicity', 25);
    this.scene.launch('HUDscene');
    this.add.image(400, 300,'Bank_Level_2');

    let question1 = this.add.image(400, 100, 'Q_Flu').setVisible(true);
    let question2 = this.add.image(400, 100, 'Q_NoJobs').setVisible(false);
    // default choices
    let quarantine = this.add.image(250, 450, 'quarantine').setInteractive();
    let workFlu = this.add.image(550, 450, 'work_flu').setInteractive();
   // second choices after default
    let firepeople = this.add.image(250, 450, 'firepeople').setInteractive().setVisible(false);
    let makejobs = this.add.image(550, 450, 'makejobs').setInteractive().setVisible(false);
   
    

    makejobs.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')
    this.registry.set('publicity', publicity + 25) 
    this.registry.set('inflation', inflation - 10)
    this.registry.set('deflation', deflation - 10)
    question1.setVisible(false);
    makeJobsChoice.setVisible(false);
    increaseprices.setVisible(false);

    question2.setVisible(true);
    work_flu.setVisible(true);
    quarantine.setVisible(true);
    
       });

   firepeople.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')
    this.registry.set('publicity', publicity - 10)
    this.registry.set('inflation', inflation - 5)
    this.registry.set('deflation', deflation + 10)
    question1.setVisible(false);
    makeJobsChoice.setVisible(false);
    increaseprices.setVisible(false);

    question2.setVisible(true);
    work_flu.setVisible(true);
    quarantine.setVisible(true);
    
       });

   quarantine.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')

    this.registry.set('publicity', publicity + 20)
    this.registry.set('inflation', inflation - 20)
    this.registry.set('deflation', deflation + 20)

    this.scene.switch('level3');
    question2.setVisible(true);
    work_flu.setVisible(true);
    quarantine.setVisible(true);
       });

  
   work_flu.on("pointerdown", () => {
    let publicity = this.registry.get('publicity')
    let inflation = this.registry.get('inflation')
    let deflation = this.registry.get('deflation')

    this.registry.set('publicity', publicity - 20)
    this.registry.set('inflation', inflation + 20)
   this.registry.set('deflation', deflation - 10)
   
   this.scene.switch('level3');
   question2.setVisible(true);
    work_flu.setVisible(true);
    quarantine.setVisible(true);
     
    
       });


  }
}
