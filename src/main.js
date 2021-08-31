import Game from './scenes/Game.js';
import Phaser from './lib/phaser.js';

console.log("hello world");

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 480,
  height:640,
  scene: Game
});
