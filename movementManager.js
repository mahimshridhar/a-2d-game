const movementManager = {
  //removed beause movement will behandled by tween
  // interval: 150,
  entities: new Set(),
  currentIndex: 0,
  //removed beause movement will behandled by tween
  // lastCall: Date.now(),
  addEntities: (entity) => movementManager.entities.add(entity),
  removeEntity: (entity) => movementManager.entities.remove(entity),
  refresh: () => movementManager.entities.forEach((e) => e.refresh()),
  turn: () => {
    // // console.log("called");
    // let now = Date.now();
    // let limit = movementManager.lastCall + movementManager.interval;
    // // console.log("now", now, limit, now > limit);
    // if (now > limit) {
    //   for (let e of movementManager.entities) {
    //     if (!e.over()) {
    //       // console.log("turn", e.turn());
    //       e.turn();
    //       break;
    //     }
    //   }
    //   movementManager.lastCall = Date.now();
    // }

    if (movementManager.entities.size > 0) {
      let entities = [...movementManager.entities];

      let selectedEntity = entities[movementManager.currentIndex];

      if (!selectedEntity.over()) {
        selectedEntity.turn();
      } else {
        movementManager.currentIndex++;
      }
    }
  },
  over: () => [...movementManager.entities].every((e) => e.over()),
};

export default movementManager;
