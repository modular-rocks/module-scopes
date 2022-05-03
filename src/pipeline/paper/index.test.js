import { wrap, build, inherit } from './index.js'
import { refine } from '.././rocks'
import { cut } from '.././scissors'
import { Scope, Procedural } from '../.././algorithms'
import { clean } from '../.././tools'
import { add } from '../.././extensions'
const Rocks = { refine }
const Paper = { wrap, build, inherit }
const Scissors = { cut }

import bundler from '../.././test-examples/basic-bundler'

import req from '@dolgit/fakin-jax'
const opts = {}
const dir = req.context('../../test-examples', true, /\.js$/, __dirname)

describe("ModularRocks paper wrap", () => {
  test("ModularRocks paper wrap returns a scope with functions - full test", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.first({x: 4})).toEqual({x: 240});
  });

  test("Nested functions work", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())
    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.first.second({x: 4})).toEqual(40);
    expect(testRock.rocks.first.second.third({x: 4})).toEqual(40);
  });

  test("Test basic scope", () => {
    opts.dir = dir
    opts.factories = [new Scope('rocks')]
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.first['first-example']({x: 4})).toEqual(12);
    expect(testRock.rocks.first.second['times-by-ten']({x: 4})).toEqual(40);
    expect(testRock.rocks.first.number).toEqual(4);
  });

  test("Test basic scope - shallow nested", () => {
    opts.dir = dir
    opts.factories = [new Scope('rocks'), new Scope('components')]
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/shallow-nested/`
    const testRock = rocks[path]
    expect(testRock.rocks.one({num: 4})).toEqual(16);
    expect(testRock.components.deep.one(4)).toEqual(4);
    expect(testRock.components.deep.two(4)).toEqual(80);
    expect(testRock.components.one({num: 4})).toEqual(60);
    expect(testRock.rocks.two({num: 4})).toEqual(8);
  });

  test("Extensions work", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    opts.factories = [new Scope('rocks')]

    const ex = (fn, env) => {
      return fn * 2
    }

    add('yo', ex)

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.ext.demo).toEqual(12);
  });

  test("Extensions work 2", () => {
    opts.dir = dir
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    opts.factories = [new Procedural('rocks')]

    const ex = (env) => {
      return (action) => 33
    }

    add('also', ex)

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.ext2({})).toEqual(33);
  });

  test("Extensions work 3", () => {
    opts.dir = dir
    opts.factories = [new Procedural('rocks')]
    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    const ex = (env) => {
      return 33
    }

    add('also', ex)

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.ext2).toEqual(33);
  });

  test("Extensions work 4", () => {
    opts.dir = dir
    opts.factories = [new Procedural('rocks')]
    const fn = () => 3

    const ex = (fn, env) => {
      return (action) => {
        return 4
      }
    }

    add('also', ex)

    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.ext2({})).toEqual(4);
  });

  test("Extensions work 5 - multiple works 1", () => {
    opts.dir = dir
    opts.factories = [new Procedural('rocks')]

    const one = (fn, env) => {
      env.number = env.number * 3
      return (action) => {
        return env.number
      }
    }

    const two = (fn, env) => {
      env.number = 4
      return fn
    }

    add('one', one)
    add('two', two)

    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.ext3({})).toEqual(12);
  });

  test("Deep extensions work", () => {
    opts.dir = dir
    opts.factories = [new Procedural('rocks')]

    opts.bundler = bundler
    bundler.set('dir', dir)
    bundler.set('keys', dir.keys())

    const collection = dir.keys()
    const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x
    const scope = Scissors.cut(opts)(collection)
    let raw = Rocks.refine(scope, opts)
    const rocks = Paper.wrap(raw, opts)
    const path = `${process.env.PWD}/src/test-examples/rock-examples/example-folder/`
    const testRock = rocks[path]
    expect(testRock.rocks.deep.deeper.deepest({num: 4})).toEqual(12);
  });
});
