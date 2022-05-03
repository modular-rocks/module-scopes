'use strict';

exports.__esModule = true;

var _tools = require('../../../../../../.././tools');

var clean = function clean(path) {
  return path.replace('///', '/').replace('//', '/');
};

exports.default = function (relativeFolderPath, section, env) {
  var relPathPieces = (0, _tools.path2Pieces)(relativeFolderPath);
  var depth = relPathPieces.length;
  var root = env.config.opts.root;


  var action = relPathPieces.slice(-1)[0];

  var _splitName = (0, _tools.splitName)(action),
      name = _splitName[0],
      enhancers = _splitName.slice(1);

  var scope = section.scope;
  var relativePath = (0, _tools.createPath)(scope.path, relativeFolderPath, section.type);
  var absolutePath = relativePath;

  if (root && !absolutePath.match(root)) {
    var abs = root + '/' + relativePath;
    absolutePath = clean(abs);
  }

  var parentPath = clean('/' + relPathPieces.slice(0, -1).join('/') + '/');

  return {
    action: action,
    name: name,
    enhancers: enhancers,
    relativeFolderPath: relativeFolderPath,
    relativePath: relativePath,
    absolutePath: absolutePath,
    relPathPieces: relPathPieces,
    depth: depth,
    parentPath: parentPath,
    root: root
  };
};

module.exports = exports['default'];