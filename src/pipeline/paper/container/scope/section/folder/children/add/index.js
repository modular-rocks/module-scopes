export default (enhanced, children) => {
  if (Object.keys(children).length < 1) return
  
  const names = Object.keys(children)
  names.map((name) => {
    enhanced[name] = children[name]
  })
}
