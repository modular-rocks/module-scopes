'use strict';

exports.__esModule = true;
exports.default = undefined;

var _push = require('./push');

var _push2 = _interopRequireDefault(_push);

var _enhance = require('./enhance');

var _enhance2 = _interopRequireDefault(_enhance);

var _metadata = require('./metadata');

var _metadata2 = _interopRequireDefault(_metadata);

var _children = require('./children');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Folder = function () {
  function Folder(relativeFolderPath, section, env) {
    _classCallCheck(this, Folder);

    this.path = relativeFolderPath;
    this.files = section.metadata[relativeFolderPath];
    this.env = env;
    this.section = section;
    section.folders[relativeFolderPath] = this;

    this.metadata = (0, _metadata2.default)(relativeFolderPath, section, env);

    var exts = env.config.extensions;
    var extensions = this.metadata.extensions;
    this.extensions = extensions.reverse().map((0, _push2.default)(exts)).filter(Boolean);
  }

  Folder.prototype.build = function build() {
    var section = this.section,
        metadata = this.metadata;

    var type = section.type;

    var _create = (0, _children.create)(section, this),
        children = _create.children,
        childStorage = _create.childStorage,
        name = _create.name;

    var env = {
      data: {
        folder: this,
        section: section,
        type: type,
        scope: section.scope
      },
      containers: {
        metadata: this.env.metadata.container,
        data: this.env.data.container,
        enhanced: this.env.data.enhanced
      },
      config: this.env.config,
      metadata: this.metadata,
      files: this.files,
      scope: childStorage,
      children: children,
      prop: name
    };

    var enhanced = _enhance2.default.call(this, env);
    env.fn = enhanced;

    childStorage[name] = enhanced;
    children && (0, _children.add)(enhanced, children);

    return childStorage;
  };

  return Folder;
}();

exports.default = Folder;
module.exports = exports['default'];