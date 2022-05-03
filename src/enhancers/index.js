const enhancers = {}

const add = (key, fn) => enhancers[key] = fn
const get = () => enhancers

export {
  add,
  get
}
