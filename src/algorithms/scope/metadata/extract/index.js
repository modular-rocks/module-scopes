import {
  hasNumber,
  hasExtensions,
  setNumber,
  setName,
  setFileExtension,
  setExtensions
} from './tools'

import { splitPath, last } from '../../../.././tools'

const extract = (filename) => {
  const object = {}
  const pieces = last(splitPath(filename)).split('.')

  setName(object, pieces)
  setFileExtension(object, pieces)

  object.filename = filename

  return object
}

export default extract
