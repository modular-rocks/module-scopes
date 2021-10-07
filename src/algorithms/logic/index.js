import Scope from '.././scope'
import { path2Pieces, pieces2Path, last, uniq } from '../../tools'

class Logic extends Scope {
  constructor(pathname) {
    super(pathname)
    this.algorithm = 'Logic'
    this.splitAt = 'first'
  }

  cut(pieces) {
    return {
      scopeProp: pieces.slice(0, 1).join(this.pathname),
      relativePath: pieces.slice(1).join(this.pathname)
    }
  }
}


export default Logic
