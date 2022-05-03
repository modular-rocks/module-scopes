import { rejectUndefined } from '../../../.././tools';

export default (function (pieces, factories) {
  var matched = [];
  var typeMap = {};
  factories.map(function (t) {
    return typeMap[t.pathname] = t;
  });
  pieces.map(function (p) {
    return typeMap[p] && matched.push(typeMap[p]);
  });
  return rejectUndefined(matched);
});