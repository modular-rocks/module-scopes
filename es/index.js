var tools = require('./tools');
var pipeline = require('./pipeline');
var algorithms = require('./algorithms');
var store = require('./store');
var features = require('./features');
var extensions = require('./extensions');

var build = features.build,
    get = features.get,
    prepare = features.prepare,
    wrap = features.wrap;


export default {
  pipeline: pipeline,
  algorithms: algorithms,
  tools: tools,
  build: build,
  get: get,
  prepare: prepare,
  wrap: wrap,
  extensions: extensions,
  features: features,
  store: store
};