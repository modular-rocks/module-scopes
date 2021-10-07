const extensions = {}

const add = (key, fn) => extensions[key] = fn
const get = () => extensions

export {
  add,
  get
}
