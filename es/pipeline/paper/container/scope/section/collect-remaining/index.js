import nestObject from '.././nest-object';

export default (function (obj, children) {
  var paths = Object.keys(children).filter(function (path) {
    return path != '/';
  });

  paths.map(function (path) {
    var _nestObject = nestObject(path, obj),
        parent = _nestObject.parent,
        currentPiece = _nestObject.currentPiece;

    parent[currentPiece] = children[path];
    delete children[path];
  });
});