import dungeon from "./dungeon";

const Player = (x, y) => {
  const p = Object.create(Player.prototype, {
    x: { value: x, writable: true, enumerable: true, configurable: true },
    y: { value: y, writable: true, enumerable: true, configurable: true },
    movementPoints: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    // sprite: { value: 29, writable: true, enumerable: true, configurable: true },
    cursor: {
      value: dungeon.scene.input.keyboard.createCursorKeys(),
      writable: true,
      enumerable: true,
      configurable: true,
    },
    title: { value: 29, writable: true, enumerable: true, configurable: true },
    hp: { value: 10, writable: true, enumerable: true, configurable: true },
    moving: {
      value: false,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  });

  // dungeon.map.putTileAt(p.sprite, p.x, p.y);
  dungeon.initializeEntity(p);

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
    let moved = false;

    if (this.movementPoints > 0) {
      if (this.cursor.left.isDown) {
        this.x -= 1;
        moved = true;
      }

      if (this.cursor.right.isDown) {
        this.x += 1;
        moved = true;
      }

      if (this.cursor.up.isDown) {
        this.y -= 1;
        moved = true;
      }

      if (this.cursor.down.isDown) {
        this.y += 1;
        moved = true;
      }

      if (moved) {
        this.movementPoints -= 1;
      }
    }

    //collision delection
    let titleAtDestination = dungeon.map.getTileAt(this.x, this.y);
    if (titleAtDestination.index === dungeon.sprites.wall) {
      this.x = oldX;
      this.y = oldY;
    }

    // tile movement code
    if (this.x !== oldX || this.y !== oldY) {
      dungeon.map.putTileAt(this.sprite, this.x, this.y);
      dungeon.map.putTileAt(dungeon.sprites.floor, oldX, oldY);
    }
  },
};

export default Player;
