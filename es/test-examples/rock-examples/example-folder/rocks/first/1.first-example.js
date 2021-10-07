module.exports = function (action) {
  action.x = action.x * 3;
  return action.x;
};