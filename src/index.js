const tools = require('./tools')
const pipeline = require('./pipeline')
const factories = require('./factories')
const store = require('./store')
const features = require('./features')
const decorators = require('./decorators')

const { build, get, prepare, wrap } = features

export default {
  pipeline,
  factories,
  tools,
  build,
  get,
  prepare,
  wrap,
  decorators,
  features,
  store
}
