import { Rocks, Scissors } from '../.././pipeline'

export default (collection, opts) => {
  const scoped = Scissors.cut(opts)(collection)
  let refined = Rocks.refine(scoped, opts)
  return {
    scoped,
    refined
  }
}
