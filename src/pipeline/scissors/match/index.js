import { path2Pieces, last } from '../../.././tools'
import filter from './filter'

export default (folder, { factories }) => {
  const pieces = path2Pieces(folder)
  let matched = filter(pieces, factories)
  let nearest = matched.reverse()[0]

  return nearest
}
