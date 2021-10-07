'use strict';

exports.__esModule = true;
exports.default = undefined;

var _folder = require('./folder');

var _folder2 = _interopRequireDefault(_folder);

var _collectRemaining = require('./collect-remaining');

var _collectRemaining2 = _interopRequireDefault(_collectRemaining);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var deepest = function deepest(a, b) {
  return b.metadata.depth - a.metadata.depth;
};

var Section = function () {
  function Section(type, scope, env) {
    var _this = this;

    _classCallCheck(this, Section);

    this.type = type;
    this.scope = scope;
    this.env = env;
    this.metadata = scope.metadata[type.index];
    this.folders = {};
    this.pipes = {};
    this.functions = {};
    this.children = {};
    scope.sections[type.pathname] = this;

    var folders = Object.keys(this.metadata);
    this.folderObjects = folders.map(function (relPath) {
      return new _folder2.default(relPath, _this, env);
    });
  }

  Section.prototype.build = function build() {
    var folders = this.folderObjects.sort(deepest);
    var root = folders.map(function (folder) {
      return folder.build();
    }).slice(-1)[0];
    (0, _collectRemaining2.default)(root, this.children);
    return root;
  };

  return Section;
}();

exports.default = Section;
module.exports = exports['default'];