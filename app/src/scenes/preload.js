import files from '../constants/assets';

export default class Preload extends Phaser.Scene {
  /**
   *  Takes care of loading the main game assets.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Preload', pack: {files}});
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(/* data */) {
    //  Register our custom bitmap font in he game system cache.
    this.load.image('perso');
    //  We are done here. Launch the game menu.
    this.scene.start('Play');
  }
}
