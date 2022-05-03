import push from './push'
// import enhance from './enhance'
import metadata from './metadata'
import { add, create } from './children'
import { file, folder } from './extend'

const find = (metadata, env) => (meta) => {
  return env.config.opts.bundler.load(meta, metadata, env)
}

const bind = function(metadata, env) {
  rebind.call(this, env, find(metadata, env))
  rebind.call(this, env, file(env))
}

const rebind = function(env, fn) {
  this.modules = this.files.map(fn)
  env.modules = this.modules
}

const attach = function(name, enhanced, env) {
  if (name) {
    return env.scope[name] = enhanced
  }

  if (typeof enhanced == 'object') {
    for (var n in enhanced) {
      env.scope[n] = enhanced[n]
    }
    return
  }

  console.warn('Attaching to scope as "unknown" - check your logic in ' + metadata.absolutePath)
  env.scope['unknown'] = enhanced
}

export default class Folder {
  constructor(relativeFolderPath, section, env) {
    this.path = relativeFolderPath
    this.files = section.metadata[relativeFolderPath]
    this.env = env
    this.section = section
    section.folders[relativeFolderPath] = this

    this.metadata = metadata(relativeFolderPath, section, env)

    const exts = env.config.enhancers
    const enhancers = this.metadata.enhancers
    this.enhancers = enhancers.reverse().map(push(exts)).filter(Boolean)
  }

  build() {
    const { section, metadata, enhancers, files } = this
    const { type, scope } = section
    const { data, config } = this.env

    let { children, childStorage, name } = create(section, this)

    const env = {
      config,
      metadata,
      files,
      children,
      scope: childStorage,
      prop: name,
      data: {
        section,
        type,
        scope,
        folder: this,
      },
      containers: {
        metadata: this.env.metadata.container,
        data: data.container,
        enhanced: data.enhanced,
      }
    }

    bind.call(this, metadata, env)

    const enhanced = folder(type.run.bind(type), env)

    attach(name, enhanced, env)
    add(enhanced, children)

    env.fn = enhanced

    return env.scope
  }
}
