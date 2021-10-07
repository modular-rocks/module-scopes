'use strict';

exports.__esModule = true;

var _tools = require('../../tools');

var _metadata = require('./metadata');

var _metadata2 = _interopRequireDefault(_metadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateUniqueString = function generateUniqueString() {
  return Math.random().toString(36).slice(-5);
};

var Scope = function () {
  function Scope(pathname) {
    _classCallCheck(this, Scope);

    this.pathname = pathname;
    this.algorithm = 'Scope';
    this.splitAt = 'last';
  }

  Scope.prototype.setIndex = function setIndex(index) {
    this.index = index;
  };

  Scope.prototype.build = function build() {
    return {};
  };

  Scope.prototype.extract = function extract(path) {
    var uniqStr = generateUniqueString();
    while (path.match(uniqStr)) {
      uniqStr = generateUniqueString();
    }
    var replace = new RegExp('/' + this.pathname + '/', 'g');
    return this.cut(path.replace(replace, '/' + uniqStr + '/').split(uniqStr));
  };

  Scope.prototype.cut = function cut(pieces) {
    return {
      scopeProp: pieces.slice(0, -1).join(this.pathname),
      relativePath: pieces.slice(-1).join(this.pathname)
    };
  };

  Scope.prototype.add = function add(section, relativePath) {
    var pieces = (0, _tools.path2Pieces)(relativePath);
    var filename = pieces.slice(-1)[0];
    var folder = relativePath.replace(filename, '');

    var sect = section[this.index];

    if (!sect[folder]) sect[folder] = [];
    sect[folder].push(filename);
    sect[folder] = (0, _tools.uniq)(sect[folder]);
  };

  Scope.prototype.refine = function refine(path, scope, section) {
    (0, _metadata2.default)(scope, section)(path);
  };

  Scope.reload = function reload(prev) {
    var next = new this(prev.pathname);
    Object.keys(prev).map(function (x) {
      return next[x] = prev[x];
    });
    return next;
  };

  Scope.prototype.run = function run(env) {
    var files = env.files,
        modules = env.modules;

    var names = files.map(function (f) {
      return f.name;
    });
    var index = modules[names.indexOf('index')];
    var data = index || {};

    names.map(function (name, i) {
      data[name] = modules[i];
    });
    delete data['index'];

    return data;
  };

  Scope.prototype.inheritedFromFramework = function inheritedFromFramework() {
    return true;
  };

  return Scope;
}();

Scope.params = ['setIndex', 'build', 'extract', 'cut', 'add', 'uniq', 'refine', 'reload', 'run'];

exports.default = Scope;
module.exports = exports['default'];