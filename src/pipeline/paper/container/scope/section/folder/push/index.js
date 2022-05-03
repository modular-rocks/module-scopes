export default (enhancers) => (ext) => {
  let fn = enhancers[ext]
  return fn ? (fn.default || fn) : undefined
}
