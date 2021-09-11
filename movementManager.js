const movementManager = {
  interval: 150,
  entities: new Set(),
  lastCall: Date.now(),
  addEntities: (entity) => movementManager.entities.add(entity),
  removeEntity: (entity) => movementManager.entities.remove(entity),
  refresh: () => movementManager.entities.forEach((e) => e.refresh()),
  turn: () => {
    // console.log("called");
    let now = Date.now();
    let limit = movementManager.lastCall + movementManager.interval;
    // console.log("now", now, limit, now > limit);
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
