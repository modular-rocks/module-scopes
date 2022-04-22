import nestObject from '../../.././nest-object'

const findOrCreate = (obj, prop) => obj[prop] || (obj[prop] = {})

const collectRemaining = (relativeFolderPath, obj, children) => {
  const re = new RegExp(`^${relativeFolderPath}`)
  const paths = Object.keys(children).filter((path) => path.match(re))

  paths.map((path) => {
    const relPath = path.replace(relativeFolderPath, '')
    const { parent, currentPiece } = nestObject(relPath, obj)
    parent[currentPiece] = children[path]
    delete children[path]
  })
}

export default (section, folder) => {
  let { name, relativeFolderPath, parentPath } = folder.metadata
  const childStorage = findOrCreate(section.children, parentPath)
  const children = findOrCreate(section.children, relativeFolderPath)

  delete section.children[relativeFolderPath]
  collectRemaining(relativeFolderPath, children, section.children)

  return {
    name,
    childStorage,
    children
  }
}
