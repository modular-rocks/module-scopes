import match from './index.js'
import { last } from '../../.././tools'

describe("ModularRocks Generate match", () => {
  test("match works without split opts", () => {
    const folder = 'root/lib/pages/files/filename'
    const type1 = { pathname: 'pages' }
    const opts = {types: [ type1 ] }

    const example = match(folder, opts)
    const expected = type1
    expect(example).toEqual(expected);
  });

  test("match works with split opts on pages", () => {
    const folder = 'root/lib/pages/files/filename'

    const type1 = { pathname: 'pages'}
    const type2 = { pathname: 'rocks'}

    const opts = {types: [ type1, type2 ] }

    const example = match(folder, opts)
    const expected = type1
    expect(example).toEqual(expected);
  });

  test("match works with split opts on rocks", () => {
    const folder = 'root/lib/pages/rocks/filename'

    const type1 = { pathname: 'pages'}
    const type2 = { pathname: 'rocks'}

    const opts = {types: [ type1, type2 ] }

    const example = match(folder, opts)
    const expected = type2
    expect(example).toEqual(expected);
  });

  test("match works with split opts on pages without types", () => {
    const folder = 'root/lib/pages/files/filename'

    const opts = {types: [ ] }

    const example = match(folder, opts)
    const expected = undefined
    expect(example).toEqual(expected);
  });

  test("match works with split opts on pages without matching route", () => {
    const folder = 'root/lib/files/filename'

    const type1 = { pathname: 'pages'}
    const type2 = { pathname: 'rocks'}

    const opts = {types: [ type1, type2 ] }

    const example = match(folder, opts)
    const expected = undefined
    expect(example).toEqual(expected);
  });


});
