import { hasNumber, hasDecorators, setNumber, setName, setFileDecorator, setDecorators } from './tools';

import { splitPath, last } from '../../../.././tools';

var extract = function extract(filename) {
  var object = {};
  var pieces = last(splitPath(filename)).split('.');

  setName(object, pieces);
  setFileDecorator(object, pieces);

  object.filename = filename;

  return object;
};

export default extract;