const movementManager = {
  interval: 150,
  entities: new Set(),
  lastCall: Date.now(),
  addEntities: (entity) => movementManager.entities.add(entity),
  removeEntity: (entity) => tm.entities.remove(entity),
  refresh: () => tm.entities.forEach((e) => e.refresh()),
  turn: () => {
    let now = Date.now();
    let limit = movementManager.lastCall + movementManager.interval;

    if (now > limit) {
      for (let e of movementManager.entities) {
        if (!e.over()) {
            // console.log("turn", e.turn());
          e.turn();
          break;
        }
      }
      movementManager.lastCall = Date.now();
    }
  },
  over: () => [...movementManager.entities].every((e) => e.over()),
};

export default movementManager;
