function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import Folder from './folder';
import collectRemaining from './collect-remaining';

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
      return new Folder(relPath, _this, env);
    });
  }

  Section.prototype.build = function build() {
    var folders = this.folderObjects.sort(deepest);
    var root = folders.map(function (folder) {
      return folder.build();
    }).slice(-1)[0];
    collectRemaining(root, this.children);
    return root;
  };

  return Section;
}();

export { Section as default };