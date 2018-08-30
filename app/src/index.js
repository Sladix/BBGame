import 'phaser';
import * as config from './config'

//  Boot the game.
export function boot() {
  return new Phaser.Game(config);
}

boot();