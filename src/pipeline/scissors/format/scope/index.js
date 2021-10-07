export default (container, types) => (folder) => {
  if (!container[folder]) {
    container[folder] = types.map((matched) => matched.build())
  }
  return container[folder]
}
