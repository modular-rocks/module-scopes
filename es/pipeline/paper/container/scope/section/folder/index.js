function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import push from './push';
import enhance from './enhance';
import metadata from './metadata';
import { add, create } from './children';

var Folder = function () {
  function Folder(relativeFolderPath, section, env) {
    _classCallCheck(this, Folder);

    this.path = relativeFolderPath;
    this.files = section.metadata[relativeFolderPath];
    this.env = env;
    this.section = section;
    section.folders[relativeFolderPath] = this;

    this.metadata = metadata(relativeFolderPath, section, env);

    var exts = env.config.extensions;
    var extensions = this.metadata.extensions;
    this.extensions = extensions.reverse().map(push(exts)).filter(Boolean);
  }

  Folder.prototype.build = function build() {
    var section = this.section,
        metadata = this.metadata;

    var type = section.type;

    var _create = create(section, this),
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

    var enhanced = enhance.call(this, env);
    env.fn = enhanced;

    childStorage[name] = enhanced;
    children && add(enhanced, children);

    return childStorage;
  };

  return Folder;
}();

export { Folder as default };