'use strict';

exports.__esModule = true;
exports.default = {
  '/test-examples/rock-examples/example-folder/': [{
    '/ext/': [{
      name: 'demo',
      fileEnhancer: 'js',
      enhancers: ['yo'],
      filename: 'demo.yo.js'
    }],
    '/ext2.also/': [{
      name: 'demo',
      fileEnhancer: 'js',
      enhancers: ['yo'],
      filename: 'demo.yo.js'
    }],
    '/ext3.one.two/': [{
      name: 'demo',
      fileEnhancer: 'js',
      enhancers: ['yo'],
      filename: 'demo.yo.js'
    }],
    '/first/': [{
      num: '1',
      name: 'first-example',
      fileEnhancer: 'js',
      filename: '1.first-example.js'
    }, {
      num: '2',
      name: 'second-example',
      fileEnhancer: 'js',
      filename: '2.second-example.js'
    }, {
      num: '3',
      name: 'third-example',
      fileEnhancer: 'js',
      filename: '3.third-example.js'
    }, { name: 'number', fileEnhancer: 'js', filename: 'number.js' }],
    '/first/second/third/': [{
      name: 'times-by-ten',
      fileEnhancer: 'js',
      filename: 'times-by-ten.js'
    }],
    '/first/second/': [{
      name: 'times-by-ten',
      fileEnhancer: 'js',
      filename: 'times-by-ten.js'
    }]
  }],
  '/test-examples/rock-examples/': [{}],
  '/test-examples/': [{}],
  '//': [{}],
  '/': [{}]
};
module.exports = exports['default'];