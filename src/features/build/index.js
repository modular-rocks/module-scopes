import { Rocks, Paper, Scissors } from '../.././pipeline'

import prepare from '.././prepare'
import wrap from '.././wrap'

// const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x

export default (bundler, opts) => {
  // opts.dir = dir
  opts.bundler = bundler
  const collection = bundler.get('keys')
  // const collection = dir.keys()
  // const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
  const { scoped, refined } = prepare(collection, opts)
  const rocks = wrap(refined, opts)
  const path = process.env.PWD + opts.root
  return rocks[path]
}
