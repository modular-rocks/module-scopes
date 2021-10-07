const hasNumber = (pieces) => !isNaN(pieces[0])
const hasExtensions = (object, pieces) => {
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

const setFileExtension = (object, pieces) => {
  object.fileExtension = pieces.slice(-1)[0]
  pieces.splice(-1, 1)
  if (hasExtensions(object, pieces)) return setExtensions(object, pieces)
}

const setExtensions = (object, pieces) => {
  object.extensions = pieces.reverse()
}

export {
  hasNumber,
  hasExtensions,
  setNumber,
  setName,
  setFileExtension,
  setExtensions
}
