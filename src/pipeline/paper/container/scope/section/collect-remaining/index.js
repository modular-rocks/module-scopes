import nestObject from '.././nest-object'

export default (obj, children) => {
  const paths = Object.keys(children).filter((path) => path != '/')

  paths.map((path) => {
    const { parent, currentPiece } = nestObject(path, obj)
    parent[currentPiece] = children[path]
    delete children[path]
  })
}
