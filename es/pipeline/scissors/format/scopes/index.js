import buildScope from '.././scope';

import { rejectUndefined, splitPath, pieces2Path, rejectBlank } from '../../../.././tools';

var createScopes = function createScopes(createScope, current) {
  while (current.length) {
    createScope('/' + pieces2Path(rejectBlank(current)) + '/');
    current.splice(-1, 1);
  }
};

export default (function (relative, container, factories, matched) {
  var createScope = buildScope(container, factories);
  createScopes(createScope, rejectUndefined(splitPath(relative)));
  createScope('/');
  return;
});