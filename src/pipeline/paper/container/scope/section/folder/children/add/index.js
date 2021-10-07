export default (enhanced, children) => {
  const names = Object.keys(children)
  names.map((name) => {
    enhanced[name] = children[name]
  })
}
