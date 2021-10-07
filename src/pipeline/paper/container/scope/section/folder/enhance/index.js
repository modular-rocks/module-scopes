import { file, folder } from './extend'

const find = (metadata, env) => (meta) => {
  return env.config.opts.bundler.load(meta, metadata, env)
}

export default function(env) {
  const type = this.section.type
  const hasExtensions = this.extensions.length

  this.modules = this.files.map(find(this.metadata, env))
  env.modules = this.modules
  this.modules = this.files.map(file(env))
  env.modules = this.modules

  if (hasExtensions) {
    return folder(type.run.bind(type), env)
  }

  return type.run(env)
}
