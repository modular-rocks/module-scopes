import { path2Pieces } from '../../../../../.././tools';

export default (function (path, obj) {
  var pieces = path2Pieces(path);
  var currentPiece = void 0,
      parent = void 0;
  var currentFolder = obj;
  pieces.map(function (piece) {
    currentPiece = piece;
    parent = currentFolder;
    currentFolder = currentFolder[piece] || (currentFolder[piece] = {});
  });

  return { parent: parent, currentPiece: currentPiece };
});