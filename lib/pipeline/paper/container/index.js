'use strict';

exports.__esModule = true;

var _scope = require('./scope');

var _scope2 = _interopRequireDefault(_scope);

var _inherit = require('./inherit');

var _inherit2 = _interopRequireDefault(_inherit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (env) {
  return function (scopePath) {
    var scope = new _scope2.default(scopePath, env);
    var enhanced = env.data.enhanced;

    (0, _inherit2.default)(scopePath, enhanced);
  };
};

module.exports = exports['default'];