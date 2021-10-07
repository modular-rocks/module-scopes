module.exports = (action) => {
  action.x = action.x * 3
  return action.x
}
