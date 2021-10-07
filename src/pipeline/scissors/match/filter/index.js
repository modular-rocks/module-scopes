import { rejectUndefined } from '../../../.././tools'

export default (pieces, types) => {
  let matched = []
  const typeMap = {}
  types.map((t) => typeMap[t.pathname] = t )
  pieces.map((p) => typeMap[p] && matched.push(typeMap[p]))
  return rejectUndefined(matched)
}
