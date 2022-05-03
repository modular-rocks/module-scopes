const hasNumber = (pieces) => !isNaN(pieces[0])
const hasEnhancers = (object, pieces) => {
  return pieces.length > 0
}
const setNumber = (object, pieces) => {
  object.num = pieces[0]
  object.name = pieces[1]
  pieces.splice(0, 2)
}

const setName = (object, pieces) => {
  if (hasNumber(pieces)) return setNumber(object, pieces)
  object.name = pieces[0]
  pieces.splice(0, 1)
}

const setFileEnhancer = (object, pieces) => {
  object.fileEnhancer = pieces.slice(-1)[0]
  pieces.splice(-1, 1)
  if (hasEnhancers(object, pieces)) return setEnhancers(object, pieces)
}

const setEnhancers = (object, pieces) => {
  object.enhancers = pieces.reverse()
}

export {
  hasNumber,
  hasEnhancers,
  setNumber,
  setName,
  setFileEnhancer,
  setEnhancers
}
