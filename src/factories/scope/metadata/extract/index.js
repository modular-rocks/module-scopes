import {
  hasNumber,
  hasEnhancers,
  setNumber,
  setName,
  setFileEnhancer,
  setEnhancers
} from './tools'

import { splitPath, last } from '../../../.././tools'

const extract = (filename) => {
  const object = {}
  const pieces = last(splitPath(filename)).split('.')

  setName(object, pieces)
  setFileEnhancer(object, pieces)

  object.filename = filename

  return object
}

export default extract
