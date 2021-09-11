import level from "./level/level_1";

let dungeon = {
  sprites: {
    floor: 0,
    wall: 554,
  },
  tileSize: 16,

  // initializeEntity: function (entity) {
  //   let x = this.map.tileToWorldX(entity.x);
  //   let y = this.map.tileToWorldY(entity.y);
  //   entity.sprite = this.scene.add(x, y, "tiles", entity.tile, entity.sprite.setOrgin(0));
  // },

  initialize: function (scene) {
    //keep a reference to scene in dungeon object

    // console.log("scene", scene);
    this.scene = scene;

    this.level = level;

    const levelWithTiles = (scene.level = level.map((r) =>
      r.map((t) => (t == 1 ? this.sprites.wall : this.sprites.floor))
    ));

    const config = {
      data: levelWithTiles,
      tileWidth: this.tileSize,
      tileHeight: this.tileSize,
    };

    const map = scene.make.tilemap(config);
    const tileset = map.addTilesetImage(
      "tiles",
      "tiles",
      this.tileSize,
      this.tileSize,
      0,
      1
    );

    //keep a reference of map in the dungeon
    this.map = map.createLayer(0, tileset, 0, 0);
  },
};

export default dungeon;
