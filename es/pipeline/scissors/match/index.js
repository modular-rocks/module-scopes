import { path2Pieces, last } from '../../.././tools';
import filter from './filter';

export default (function (folder, _ref) {
  var factories = _ref.factories;

  var pieces = path2Pieces(folder);
  var matched = filter(pieces, factories);
  var nearest = matched.reverse()[0];

  return nearest;
});