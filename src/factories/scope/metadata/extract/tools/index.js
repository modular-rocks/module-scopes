const hasNumber = (pieces) => !isNaN(pieces[0])
const hasDecorators = (object, pieces) => {
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

const setFileDecorator = (object, pieces) => {
  object.fileDecorator = pieces.slice(-1)[0]
  pieces.splice(-1, 1)
  if (hasDecorators(object, pieces)) return setDecorators(object, pieces)
}

const setDecorators = (object, pieces) => {
  object.decorators = pieces.reverse()
}

export {
  hasNumber,
  hasDecorators,
  setNumber,
  setName,
  setFileDecorator,
  setDecorators
}
