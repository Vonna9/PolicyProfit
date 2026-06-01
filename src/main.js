import './style.css'
import Phaser from 'phaser' 
const config = {
  type: Phaser.WEBGL, 
  width: 800,
  height: 600, 
  canvas: gameCanvas
};

const game = new Phaser.Game(config);
