const store = {}

const get = (path, attr, quiet) => {
  const section = store[path]
  if (section && section[attr]) {
    return section[attr]
  }

  if (!section && !quiet) {
    console.warn(`Path supplied not found, defaulting to another path. Please visit http://docs.modular.rocks/docs/errors for more info. Path received: ${path}.`)
  }

  const [first] = Object.keys(store)

  if (!first) {
    console.warn('No paths supplied')
  }

  const data = store[first]

  if (!data[attr] && !quiet) {
    console.warn(`Attr not found: ${attr}. You're calling ${attr} too early`)
  }

  return data[attr]
}

const getStore = () => store
const set = (path, attr, data) => {
  store[path] = store[path] || (store[path] = {})
  store[path][attr] = data
  return get(path, attr)
}

const save = (root, attr, data) => {
  set(root, attr, data)
  return get(root, attr)
}

const closest = (path, attr) => get(path, attr, {quiet: true})

export { get, set, save, getStore, closest }
