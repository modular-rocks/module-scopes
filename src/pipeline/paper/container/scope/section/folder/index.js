import push from './push'
import enhance from './enhance'
import metadata from './metadata'
import { add, create } from './children'

export default class Folder {
  constructor(relativeFolderPath, section, env) {
    this.path = relativeFolderPath
    this.files = section.metadata[relativeFolderPath]
    this.env = env
    this.section = section
    section.folders[relativeFolderPath] = this

    this.metadata = metadata(relativeFolderPath, section, env)

    const exts = env.config.extensions
    const extensions = this.metadata.extensions
    this.extensions = extensions.reverse().map(push(exts)).filter(Boolean)
  }

  build() {
    const { section, metadata } = this
    const type = section.type
    const { children, childStorage, name } = create(section, this)

    const env = {
      data: {
        folder: this,
        section,
        type,
        scope: section.scope,
      },
      containers: {
        metadata: this.env.metadata.container,
        data: this.env.data.container,
        enhanced: this.env.data.enhanced,
      },
      config: this.env.config,
      metadata: this.metadata,
      files: this.files,
      scope: childStorage,
      children,
      prop: name
    }

    const enhanced = enhance.call(this, env)
    env.fn = enhanced

    childStorage[name] = enhanced
    children && add(enhanced, children)

    return childStorage
  }
}
