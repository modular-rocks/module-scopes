import { parent, splitPath, resolve } from '../../.././tools';

export default (function (path) {
  var relative = path;
  var pieces = splitPath(relative);
  var folder = parent(relative);
  var filename = relative.replace(folder, '');

  return { relative: relative, folder: folder, filename: filename, pieces: pieces };
});