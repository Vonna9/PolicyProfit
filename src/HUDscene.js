import './style.css'
import Phaser from 'phaser' 

let publicity_score = 25;
let inflation_score = 10; 
let deflation_score = 10;

var populationText; 
var inflationText;
var deflationText; 

export default class HUDscene extends Phaser.Scene {
  constructor() {
    super('HUDscene');
  }
  preload () {
    this.load.image('UIbar', '/assets/Bar.jpg');
  }

  create() {
    UIbar = this.add.image(400, 10, 'UIbar');
    UIbar.setOrigin(0.5, 0.5);
    populationText = this.add.text(16, 32, 'publicity = 25', {fontSize: '32px, fill: #000'});
    inflationText = this.add.text(16, 64, 'inflation: 25', {fontSize: '32px, fill: #000'});
    deflationText = this.add.text(16, 76, 'deflation = 25', {fontSize: '32px, fill: #000'});
  }
}