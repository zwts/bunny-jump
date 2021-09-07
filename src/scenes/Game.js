import Phaser from '../lib/phaser.js';

export default class Game extends Phaser.Scene {
  player

  constructor() {
    super('game'); // Every Scene has to define a unique key.
  }

  //called to allow us to specify images, audio, or other assets to load before starting the Scene.
  preload() {
    // The path `assets/bg_layer1.png` is not relative to the current file.
    // second is the path to the image when served from the development server.
    this.load.image('background', 'assets/bg_layer1.png');
    this.load.image('platform', 'assets/ground_grass.png');
    this.load.image('bunny-stand', 'assets/bunny1_stand.png');
  }

  //called once all the assets for the Scene have been loaded.
  create() {
    // create background
    this.add.image(240, 320, 'background');

    // create platform
    // this.add.image(240, 320, 'platform').setScale(0.5);
    // this.physics.add.image(240, 320, 'platform').setScale(0.5);  a fall platform
    // this.physics.add.staticImage(240, 320, 'platform').setScale(0.5); a static platform
    const platforms = this.physics.add.staticGroup();
    for (let i = 0; i < 5; ++i) {
      const x = Phaser.Math.Between(80, 400);
      const y = 150 * i;

      const platform = platforms.create(x, y, 'platform');
      platform.scale = 0.5;

      const body = platform.body;
      body.updateFromGameObject();
    }

    // create bunny
    this.player = this.physics.add.sprite(240, 320, 'bunny-stand').setScale(0.5);
    // add a collider between the platforms created earlier and the new player variable.
    this.physics.add.collider(platforms, this.player);
  }

  update() {
    // find out from Arcade Physics if the player's physics body
    // is touching something below it
    const touchingDown = this.player.body.touching.down;

    if (touchingDown) {
      this.player.setVelocityY(-300);
    }
  }
}
