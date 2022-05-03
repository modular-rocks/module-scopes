export default (container, factories) => (folder) => {
  if (!container[folder]) {
    container[folder] = factories.map((matched) => matched.build())
  }
  return container[folder]
}
