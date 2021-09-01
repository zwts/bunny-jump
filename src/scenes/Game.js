import Phaser from '../lib/phaser.js';

export default class Game extends Phaser.Scene
{
  constructor() {
    super('game'); // Every Scene has to define a unique key.
  }

  //called to allow us to specify images, audio, or other assets to load before starting the Scene.
  preload() {
    // The path `assets/bg_layer1.png` is not relative to the current file.
    // second is the path to the image when served from the development server.
    this.load.image('background', 'assets/bg_layer1.png');
    this.load.image('platform', 'assets/ground_grass.png');
  }

  //called once all the assets for the Scene have been loaded.
  create() {
    this.add.image(240, 320, 'background');
    this.add.image(240, 320, 'platform').setScale(0.5);
  }
}
