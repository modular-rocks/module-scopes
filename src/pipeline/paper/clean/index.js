export default (container) => {
  let counts = []
  for (var key in container) {
    const obj = container[key]
    if (!Object.keys(obj).length) {
      delete container[key]
      continue
    }

    counts.push([key, key.match(/\//gi).length])
  }

  counts = counts.sort((a,b) => a[1] - b[1])
  container.root = counts[0] ? container[counts[0][0]] : {}

  return container
}
