import './style.css'
import Phaser from 'phaser' 

 class MyScene extends Phaser.Scene {
  
 }

const config = {
  type: Phaser.WEBGL, 
  width: 800,
  height: 600, 
  canvas: gameCanvas
  
};

const game = new Phaser.Game(config);

