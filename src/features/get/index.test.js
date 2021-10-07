import get from './index.js'
import req from '@dolgit/fakin-jax'
import { parentScopePath, clean } from '../.././tools'
import { Rocks, Paper, Scissors } from '../.././pipeline'

import bundler from '../.././test-examples/basic-bundler'

// need to fix
const opts = {root: '/src/test-examples/rock-examples/example-folder/'}
const dir = req.context('../../test-examples/rock-examples', true, /\.js$/, __dirname)
const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x

describe("ModularRocks features get", () => {
  test("gets scope if scope", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)

    const rootLocation = process.env.PWD + opts.root

    const foundScope = get(rootLocation, opts.root)
    expect(foundScope.rocks.first({x: 4})).toEqual({x: 240});
  })

  test("defaults to root scope if scopePath is unknown", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)

    const rootLocation = process.env.PWD + opts.root

    const foundScope = get('/sdfdfd/', opts.root)
    expect(foundScope.rocks.first({x: 4})).toEqual({x: 240});
  })

  test("defaults to root scope if scopePath is undefined", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)

    const rootLocation = process.env.PWD + opts.root

    const foundScope = get(undefined, opts.root)
    expect(foundScope.rocks.first({x: 4})).toEqual({x: 240});
  })

  test("defaults to root scope if root is undefined", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)

    const rootLocation = process.env.PWD + opts.root

    const foundScope = get(undefined, 'ddkdkd')
    expect(foundScope.rocks.first({x: 4})).toEqual({x: 240});
  })
});
