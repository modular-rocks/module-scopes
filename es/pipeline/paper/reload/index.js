import { Scope, Logic, Procedural } from '../../../factories';
var factories = { Scope: Scope, Logic: Logic, Procedural: Procedural };

export default (function (type) {
  var matchable = type.factory && factories[type.factory];

  if (matchable) {
    return factories[type.factory].reload(type);
  }

  return type;
});