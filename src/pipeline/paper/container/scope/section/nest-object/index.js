import { path2Pieces } from '../../../../../.././tools'

export default (path, obj) => {
  const pieces = path2Pieces(path)
  let currentPiece, parent
  let currentFolder = obj
  pieces.map((piece) => {
    currentPiece = piece
    parent = currentFolder
    currentFolder = currentFolder[piece] || (currentFolder[piece] = {})
  })

  return { parent, currentPiece }
}
