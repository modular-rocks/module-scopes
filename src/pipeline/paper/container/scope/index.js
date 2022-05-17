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

    env.config.opts.factories.forEach((factory) => new Section(factory, this, env))
  }

  build() {
    this.env.config.opts.factories.map((factory) => {
      const section = this.sections[factory.pathname]
      const root = section.build()
      if (root) {
        this.functionality[factory.pathname] = root
      }
    })
  }
}
