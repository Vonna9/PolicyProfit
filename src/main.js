import './style.css'
import Phaser from 'phaser' 


const config = {
  type: Phaser.WEBGL, 
  width: 800,
  height: 600, 
  canvas: gameCanvas
  
};
var config = {
type: Phaser.AUTO,
width: 800,
height: 600,
scene: CoverPage
};

const game = new Phaser.Game(config);

