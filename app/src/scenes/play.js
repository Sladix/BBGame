export default class Play extends Phaser.Scene {
  /**
   *  Takes care of loading the main game assets.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Play'});
  }

  /**
   *  Called when this scene is initialized.
   *
   *  @protected
   *  @param {object} [data={}] - Initialization parameters.
   */
  init(/* data */) {
        this.generateBackground();
        this.player = this.physics.add.image(50, 50, 'perso');
        this.player.setCollideWorldBounds(true);
        this.jumpKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.input.on('pointerdown', function (pointer) {
          let mouse = pointer;
          let angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, mouse.x + this.cameras.main.scrollX, mouse.y + this.cameras.main.scrollY);
          this.fireProjectile(angle);
        }, this);

        this.speed = 150;
        this.jumpVelocity = 300;
        this.fireCooldown = 0;
        this.fireRate = 1000; //ms
  }

  update() {
      this.player.body.velocity.x = 0;

      if (this.leftKey.isDown) {
          this.player.body.velocity.x = -this.speed;
          this.player.scaleX = -1;
      }

      if (this.rightKey.isDown) {
          this.player.body.velocity.x = this.speed;
          this.player.scaleX = 1;
      }

      if (this.jumpKey.isDown && this.player.body.onFloor()) {
          this.player.body.velocity.y -= this.jumpVelocity;
      }
  }

  fireProjectile(angle) {
    if(this.time.now < this.fireCooldown) {
      return;
    }
    console.log("fired", angle, this.time);
    this.fireCooldown = this.time.now + this.fireRate;
  }

  generateBackground() {

  }
}
