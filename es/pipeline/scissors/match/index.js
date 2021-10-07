import { path2Pieces, last } from '../../.././tools';
import filter from './filter';

export default (function (folder, _ref) {
  var types = _ref.types;

  var pieces = path2Pieces(folder);
  var matched = filter(pieces, types);
  var nearest = matched.reverse()[0];

  return nearest;
});