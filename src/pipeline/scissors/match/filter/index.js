import { rejectUndefined } from '../../../.././tools'

export default (pieces, factories) => {
  let matched = []
  const typeMap = {}
  factories.map((t) => typeMap[t.pathname] = t )
  pieces.map((p) => typeMap[p] && matched.push(typeMap[p]))
  return rejectUndefined(matched)
}
