import {
  hasNumber,
  hasDecorators,
  setNumber,
  setName,
  setFileDecorator,
  setDecorators
} from './tools'

import { splitPath, last } from '../../../.././tools'

const extract = (filename) => {
  const object = {}
  const pieces = last(splitPath(filename)).split('.')

  setName(object, pieces)
  setFileDecorator(object, pieces)

  object.filename = filename

  return object
}

export default extract
