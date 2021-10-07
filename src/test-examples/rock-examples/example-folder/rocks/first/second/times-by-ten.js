module.exports = (action) => {
  action.x = action.x * 10
  return action.x
}
