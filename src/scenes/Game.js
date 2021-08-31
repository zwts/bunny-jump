import Phaser from '../lib/phaser.js';

export default class Game extends Phaser.Scene
{
  constructor() {
    super('game'); // Every Scene has to define a unique key.
  }

  preload() {} //called to allow us to specify images, audio, or other assets to load before starting the Scene.

  create() {} //called once all the assets for the Scene have been loaded.
}
