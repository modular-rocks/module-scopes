export default (decorators) => (ext) => {
  let fn = decorators[ext]
  return fn ? (fn.default || fn) : undefined
}
