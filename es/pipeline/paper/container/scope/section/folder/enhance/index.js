import find from './find';
import { file, folder } from './extend';

export default function (env) {
  var type = this.section.type;
  var hasExtensions = this.extensions.length;

  this.modules = this.files.map(find(this.metadata, env));
  env.modules = this.modules;
  this.modules = this.files.map(file(env));
  env.modules = this.modules;

  if (hasExtensions) {
    return folder(type.run.bind(type), env);
  }

  return type.run(env);
}