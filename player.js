import dungeon from "./dungeon";

const Player = (x, y) => {
  const p = Object.create(Player.prototype, {
    x: { value: x, writable: true, enumerable: true, configurable: true },
    y: { value: y, writable: true, enumerable: true, configurable: true },
    movemenetPoint: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    sprite: { value: 29, writable: true, enumerable: true, configurable: true },
    cursor: {
      value: dungeon.scene.input.keyboard.createCursorKeys(),
      //   writable: true,
      //   enumerable: true,
      //   configurable: true,
    },
  });

  dungeon.map.putTileAt(p.sprite, p.x, p.y);

  return p;
};

Player.prototype = {
  constructor: Player,

  refresh: function (x) {
    this.movementPoints = 1;
  },
  over: function () {
    return this.movementPoints == 0;
  },

  turn: function () {
    let oldX = this.x;
    let oldY = this.y;
    console.log("this.cursor.left", this.cursor);
    if (this.movementPoints > 0) {
      if (this.cursor.left.isDown) {
        console.log("run turn 2");
        this.x -= 1;
        moved = true;
      }

      if (thiscursors.right.isDown) {
        console.log("run turn 2");
        this.x += 1;
        moved = true;
      }

      if (moved) {
        this.movementPoints -= 1;
      }
    }

    // tile movement code
    if (this.x !== oldX || this.y !== oldY) {
      dungeon.map.putTileAt(this.sprite, this.x, this.y);
      //   dungeon.map.putTileAt(dungeon.sprites.floor, oldX, oldY);
    }
    // dungeon.map.putTileAt(dungeon.sprites.floor, this.x, this.y);
  },
};

export default Player;
