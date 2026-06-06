import './style.css'
import Phaser from 'phaser' 
import { mainmenu } from './mainmenu.js'
import { level1 } from './level1.js'
import { level2 } from './level2.js'
import { level3 } from './level3.js'

const config = {
  type: Phaser.WEBGL, 
  width: 800,
  height: 600, 
  canvas: gameCanvas,
  physics:{
    default: "arcade",
    arcade:{
      gravity:{y:speedDown},
      debug: true
    }
  },
  parent: "mainmenu",
  scene:[mainmenu, level1, level2, level3],
};

const game = new Phaser.Game(config);

