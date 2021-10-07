import Folder from './folder'
import collectRemaining from './collect-remaining'

const deepest = (a, b) => b.metadata.depth - a.metadata.depth

export default class Section {
  constructor(type, scope, env) {
    this.type = type
    this.scope = scope
    this.env = env
    this.metadata = scope.metadata[type.index]
    this.folders = {}
    this.pipes = {}
    this.functions = {}
    this.children = {}
    scope.sections[type.pathname] = this

    const folders = Object.keys(this.metadata)
    this.folderObjects = folders.map((relPath) => new Folder(relPath, this, env))
  }

  build() {
    const folders = this.folderObjects.sort(deepest)
    const root = folders.map((folder) => folder.build()).slice(-1)[0]
    collectRemaining(root, this.children)
    return root
  }

}
