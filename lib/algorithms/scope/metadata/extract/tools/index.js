"use strict";

exports.__esModule = true;
var hasNumber = function hasNumber(pieces) {
  return !isNaN(pieces[0]);
};
var hasExtensions = function hasExtensions(object, pieces) {
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

var setFileExtension = function setFileExtension(object, pieces) {
  object.fileExtension = pieces.slice(-1)[0];
  pieces.splice(-1, 1);
  if (hasExtensions(object, pieces)) return setExtensions(object, pieces);
};

var setExtensions = function setExtensions(object, pieces) {
  object.extensions = pieces.reverse();
};

exports.hasNumber = hasNumber;
exports.hasExtensions = hasExtensions;
exports.setNumber = setNumber;
exports.setName = setName;
exports.setFileExtension = setFileExtension;
exports.setExtensions = setExtensions;