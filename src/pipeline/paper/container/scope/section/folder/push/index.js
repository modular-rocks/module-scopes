export default (extensions) => (ext) => {
  let fn = extensions[ext]
  return fn ? (fn.default || fn) : undefined
}
