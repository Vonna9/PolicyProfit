import './style.css'
import Phaser from 'phaser' 
import Level1 from './level1.js'
import Level2 from './level2.js'
import Level3 from './level3.js'
import MainMenu from './mainmenu.js'

const config = {
  type: Phaser.WEBGL, 
  width: 800,
  height: 600, 
  canvas: gameCanvas,
  scene:[MainMenu, Level1, Level2, Level3],
};

const game = new Phaser.Game(config);

