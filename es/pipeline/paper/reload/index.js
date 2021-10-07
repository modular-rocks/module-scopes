import { Scope, Logic, Enhanced } from '../../../algorithms';
var algorithms = { Scope: Scope, Logic: Logic, Enhanced: Enhanced };

export default (function (type) {
  var matchable = type.algorithm && algorithms[type.algorithm];

  if (matchable) {
    return algorithms[type.algorithm].reload(type);
  }

  return type;
});