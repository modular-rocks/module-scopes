var hasNumber = function hasNumber(pieces) {
  return !isNaN(pieces[0]);
};
var hasDecorators = function hasDecorators(object, pieces) {
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

var setFileDecorator = function setFileDecorator(object, pieces) {
  object.fileDecorator = pieces.slice(-1)[0];
  pieces.splice(-1, 1);
  if (hasDecorators(object, pieces)) return setDecorators(object, pieces);
};

var setDecorators = function setDecorators(object, pieces) {
  object.decorators = pieces.reverse();
};

export { hasNumber, hasDecorators, setNumber, setName, setFileDecorator, setDecorators };