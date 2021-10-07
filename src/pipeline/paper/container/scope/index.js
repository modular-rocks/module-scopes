import Section from './section'

export default class Scope {
  constructor(path, env) {
    this.path = path
    this.metadata = env.metadata.container[path]
    this.env = env
    this.sections = {}
    this.pipes = {}
    this.container = env.data.container
    this.functionality = {}

    env.data.enhanced[path] = this.functionality
    env.data.container[path] = this

    env.config.opts.types.forEach((type) => new Section(type, this, env))

    env.config.opts.types.map((type) => {
      const section = this.sections[type.pathname]
      const root = section.build()
      if (root) {
        this.functionality[type.pathname] = root
      }
    })
  }
}
