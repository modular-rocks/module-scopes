import { path2Pieces, createPath, splitName } from '../../../../../../.././tools';

var clean = function clean(path) {
  return path.replace('///', '/').replace('//', '/');
};

export default (function (relativeFolderPath, section, env) {
  var relPathPieces = path2Pieces(relativeFolderPath);
  var depth = relPathPieces.length;
  var action = relPathPieces.slice(-1)[0];
  var root = env.config.opts.root;

  var _splitName = splitName(action),
      name = _splitName[0],
      extensions = _splitName.slice(1);

  var scope = section.scope;

  var relativePath = createPath(scope.path, relativeFolderPath, section.type);
  var absolutePath = relativePath;

  if (root && !absolutePath.match(root)) {
    var abs = root + '/' + relativePath;
    absolutePath = clean(abs);
  }

  var parentPath = clean('/' + relPathPieces.slice(0, -1).join('/') + '/');

  return {
    action: action,
    name: name,
    extensions: extensions,
    relativeFolderPath: relativeFolderPath,
    relativePath: relativePath,
    absolutePath: absolutePath,
    relPathPieces: relPathPieces,
    depth: depth,
    parentPath: parentPath,
    root: root
  };
});