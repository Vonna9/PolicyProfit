import './style.css'
import Phaser from 'phaser' 
import Level1 from './level1.js'
import Level2 from './level2.js'
import Level3 from './level3.js'
import MainMenu from './mainmenu.js'
import Gameover1 from './gameover1.js'
import Gameover2 from './gameover2.js'
import Gameover3 from './gameover3.js'
import Winner from './winscreen.js'
import HUDscene from './HUDscene.js'


const config = {
  type: Phaser.WEBGL, 
  width: 800,
  height: 600, 
  canvas: gameCanvas,
  scene:[MainMenu, Level1, Level2, Level3, HUDscene, Gameover1, Gameover2, Gameover3, Winner],
};

const game = new Phaser.Game(config);

