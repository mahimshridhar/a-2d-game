import dungeon from "./dungeon";
import PF from "pathfinding";

const BasicMonstater = (x, y) => {
  const m = Object.create(BasicMonstater.prototype, {
    x: { value: x, writable: true, enumerable: true, configurable: true },
    y: { value: y, writable: true, enumerable: true, configurable: true },
    movementPoints: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    // sprite: { value: 29, writable: true, enumerable: true, configurable: true },
    // cursors: {
    //   value: dungeon.scene.input.keyboard.createCursorKeys(),
    //   writable: true,
    //   enumerable: true,
    //   configurable: true,
    // },
    tile: { value: 26, writable: true, enumerable: true, configurable: true },
    // hp: { value: 10, writable: true, enumerable: true, configurable: true },
    // moving: {
    //   value: false,
    //   writable: true,
    //   enumerable: true,
    //   configurable: true,
    // },
  });

  // dungeon.map.putTileAt(p.sprite, p.x, p.y);
  dungeon.initializeEntity(m);

  return m;
};

BasicMonstater.prototype = {
  constructor: BasicMonstater,
  refresh: function () {
    this.movementPoints = 1;
  },
  over: function () {
    return this.movementPoints == 0 && !this.moving;
  },
  turn: function () {
    let oldX = this.x;
    let oldY = this.y;

    if (this.movementPoints > 0) {
      let px = dungeon.player.x;
      let py = dungeon.player.y;

      let grid = new PF.Grid(dungeon.level);

      let finder = new PF.AStarFinder();

      let path = finder.findPath(oldX, oldY, px, py, grid);

      if (path.length > 2) {
        dungeon.moveEntityTo(this, path[1][0], path[1][1]);
      }

      //   console.log("path", path);
    }
  },
};

export default BasicMonstater;
