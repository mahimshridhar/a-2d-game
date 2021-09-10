import Phaser from "phaser";
// import level1 from "./level/level_1";
import dungeon from "./dungeon";
import PlayerCharacter from "./player";

var config = {
  type: Phaser.AUTO,
  width: 80 * 16,
  height: 50 * 16,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet("tiles", "/assets/colored.png", {
    frameWidth: 16,
    frameHeight: 16,
    spacing: 1,
  });
}

function create() {
  dungeon.initialize(this);
  let player = PlayerCharacter(15, 15);
}
