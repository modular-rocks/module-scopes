import build from './index.js'
import req from '@dolgit/fakin-jax'
import bundler from '../.././test-examples/basic-bundler'


const opts = {root: '/src/test-examples/rock-examples/example-folder/'}
const dir = req.context('../../test-examples/rock-examples', true, /\.js$/, __dirname)

describe("ModularRocks feature build", () => {
  test("builds", () => {
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const scope = build(bundler, opts)
    expect(scope.rocks.first({x: 4})).toEqual({x: 240});
  })
});
