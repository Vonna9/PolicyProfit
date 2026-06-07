import './style.css'
import Phaser from 'phaser' 

var population_score = 25;
var inflation_score = 25; 
var deflation_score = 25;
var year_score = 1; 

var populationText; 
var inflationText;
var deflationText; 
var yearText; 

export default class HUDscene extends Phaser.Scene {
  constructor() {
    super('HUD');
  }
  preload () {
    this.load.image('kingdomUI', '/assets/kingdomUI.png');
  }

  create() {
    this.add.image(400, 0, 'kingdomUI');
    yearText = this.add.text(16, 16, 'deflation = 25', {fontSize: '32px, fill: #000'});
    populationText = this.add.text(16, 32, 'population happiness = 25', {fontSize: '32px, fill: #000'});
    inflationText = this.add.text(16, 64, 'inflation: 25', {fontSize: '32px, fill: #000'});
    deflationText = this.add.text(16, 76, 'deflation = 25', {fontSize: '32px, fill: #000'});
    
  }
}