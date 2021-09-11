import Phaser from "phaser";
import dungeon from "./dungeon";
import PlayerCharacter from "./player";
import movementManager from "./movementManager";

export default function gameMain() {
  var config = {
    type: Phaser.AUTO,
    width: 80 * 16,
    height: 50 * 16,
    backgroundColor: "#000",
    parent: "game",
    pixelArt: true,
    zoom: 1,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };

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

    movementManager.addEntities(player);
  }

  function update() {
    if (movementManager.over()) {
      movementManager.refresh();
    }
    movementManager.turn();
  }

  var game = new Phaser.Game(config);
}
