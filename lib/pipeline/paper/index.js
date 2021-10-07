'use strict';

exports.__esModule = true;
exports.inherit = exports.wrap = undefined;

var _inherit = require('./container/inherit');

var _inherit2 = _interopRequireDefault(_inherit);

var _clean = require('./clean');

var _clean2 = _interopRequireDefault(_clean);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _reload = require('./reload');

var _reload2 = _interopRequireDefault(_reload);

var _store = require('../../store');

var _extensions = require('../../extensions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var asc = function asc(a, b) {
  return a.length - b.length;
};
var createContainer = function createContainer() {
  return { '/': {} };
};

var wrap = function wrap(metadataContainer, opts) {
  opts.types = opts.types.map(_reload2.default);
  var scopes = createContainer();
  var enhancedContainer = createContainer();

  var env = {
    data: {
      container: scopes,
      enhanced: enhancedContainer
    },
    metadata: {
      container: metadataContainer
    },
    config: {
      opts: opts,
      extensions: (0, _extensions.get)()
    }
  };

  (0, _store.set)(opts.base, 'env', env);

  Object.keys(metadataContainer).sort(asc).forEach((0, _container2.default)(env));
  enhancedContainer = (0, _clean2.default)(enhancedContainer);
  return enhancedContainer;
};

exports.wrap = wrap;
exports.inherit = _inherit2.default;