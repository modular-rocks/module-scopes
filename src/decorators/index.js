const decorators = {}

const add = (key, fn) => decorators[key] = fn
const get = () => decorators

export {
  add,
  get
}
