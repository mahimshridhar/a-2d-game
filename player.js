import dungeon from "./dungeon";

const Player = (x, y) => {
  console.log("palyer constructor called with arg");

  const player =  Object.create(Player.prototype, {
    x: { value: x, writable: true, enumerable: true, configurable: true },
    y: { value: y, writable: true, enumerable: true, configurable: true },
    movemenetPoint:  { value: 1, writable: true, enumerable: true, configurable: true },
    sprite:  { value: 29, writable: true, enumerable: true, configurable: true },
    cursor:  dungeon.scene.input.keyboard.createCursorKeys()
  });

  dungeon.map.putTileAt(player.sprite, player.x, player.y)
};

Player.prototype = {
  sayHi: function (x) {
    console.log("hi  " + x);
  },
};

export default Player;
