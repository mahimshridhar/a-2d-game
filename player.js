const Player = (x) => {
  console.log("palyer constructor called with arg " + x);
  return Object.create(Player.prototype);
};

Player.prototype = {
  sayHi: function (x) {
    console.log("hi  " + x);
  },
};

export default Player;
