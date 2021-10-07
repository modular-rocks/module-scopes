"use strict";

module.exports = function (action) {
  action.x = action.x * 10;
  return action.x;
};