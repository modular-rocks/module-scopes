import Logic from '.././logic'
import run from './run'

import { path2Pieces, pieces2Path, last, uniq } from '../../tools'

const isFunc = (fn) => typeof fn === 'function'

class Enhanced extends Logic {
  constructor(pathname) {
    super(pathname)
    this.algorithm = 'Enhanced'
  }

  run(env) {
    const [fns, nonFuncs] = [[], []]

    for (let i = 0; i < env.modules.length; i++) {
      const module = env.modules[i]
      if (isFunc(module) && fns.push(module)) continue
      const { name } = env.files[i]
      nonFuncs.push([module, name])
    }

    const fn = (action) => run(fns, action, env)

    nonFuncs.forEach(([f, name]) => {
      fn[name] = f
    })

    return fn
  }
}


export default Enhanced
