import Phaser from "phaser";
import level1 from "./level/level_1";

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
  this.load.spritesheet("tiles", "assets/colored.png", {
    frameWidth: 16,
    frameHeight: 16,
    spacing: 1,
  });
}

function create() {
  const wall = 198;
  const floor = 0;
  const level = level1.map((r) => r.map((t) => (t == 1 ? wall : floor)));

  // Draw the tilemap
  const tileSize = 16;
  const config = {
    data: level,
    tileWidth: tileSize,
    tileHeight: tileSize,
  };
  const map = this.make.tilemap(config);
  const tileset = map.addTilesetImage(
    "tiles",
    "tiles",
    tileSize,
    tileSize,
    0,
    1
  );
  const ground = map.createStaticLayer(0, tileset, 0, 0);
}
