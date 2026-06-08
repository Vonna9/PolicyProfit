import './style.css'
import Phaser from 'phaser' 
//Text




export default class HUDscene extends Phaser.Scene {
  constructor() {
    super('HUDscene');
  }
  preload () {
    this.load.image('UIbar', '/assets/Bar.jpg');
  }

  create() {
    

    this.publicityText = this.add.text(50, 40, 'publicity', {fontSize: '25px', color: '#0ff317'});
    this.inflationText = this.add.text(300, 40, 'inflation', {fontSize: '25px', color: '#f91010'});
    this.deflationText = this.add.text(550, 40, 'deflation', {fontSize: '25px', color: '#5713e1'});
    
   


   this.publicityText.setText('Publicity: ' + this.registry.get('publicity'));
   this.inflationText.setText('Inflation: ' + this.registry.get('inflation'));
   this.deflationText.setText('Deflation: ' + this.registry.get('deflation'));


   this.registry.events.on('changedata', (parent, key, value) => {
        if (key === 'publicity') {
            this.publicityText.setText('Publicity ' + value);
        }
        if (key === 'inflation') {
            this.inflationText.setText('Inflation ' + value);
        }
        if (key === 'deflation') {
            this.deflationText.setText('Deflation ' + value);
        }
     });
  }
    
   
   
}
