import paths from '../.././test-examples/json/paths.js'
import sliced from '../.././test-examples/json/cut.js'

import { cut } from './index.js'
import { Scope } from '../.././algorithms'


import bundler from '../.././test-examples/basic-bundler'


import req from '@dolgit/fakin-jax'
const opts = {}
const dir = req.context('../../test-examples/rock-examples', true, /\.js$/, __dirname)


const type1 = new Scope('rocks')
type1.index = 0

const config = {
  regex: /\.js?$/,
  types: [
    type1
  ],
  bundler
}


describe("ModularRocks rocks (unpack)", () => {
  test("ModularRocks unpack extract creates a filename", () => {
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const scopes = cut(config)(paths)
    expect(scopes).toEqual(sliced);
  });
});
