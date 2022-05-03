"use strict";

exports.__esModule = true;
var hasNumber = function hasNumber(pieces) {
  return !isNaN(pieces[0]);
};
var hasEnhancers = function hasEnhancers(object, pieces) {
  return pieces.length > 0;
};
var setNumber = function setNumber(object, pieces) {
  object.num = pieces[0];
  object.name = pieces[1];
  pieces.splice(0, 2);
};

var setName = function setName(object, pieces) {
  if (hasNumber(pieces)) return setNumber(object, pieces);
  object.name = pieces[0];
  pieces.splice(0, 1);
};

var setFileEnhancer = function setFileEnhancer(object, pieces) {
  object.fileEnhancer = pieces.slice(-1)[0];
  pieces.splice(-1, 1);
  if (hasEnhancers(object, pieces)) return setEnhancers(object, pieces);
};

var setEnhancers = function setEnhancers(object, pieces) {
  object.enhancers = pieces.reverse();
};

exports.hasNumber = hasNumber;
exports.hasEnhancers = hasEnhancers;
exports.setNumber = setNumber;
exports.setName = setName;
exports.setFileEnhancer = setFileEnhancer;
exports.setEnhancers = setEnhancers;