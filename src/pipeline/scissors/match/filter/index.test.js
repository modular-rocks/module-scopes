import filter from './index.js'

describe("ModularRocks Generate match filter", () => {
  test("match filter works", () => {

    const pieces = ['root', 'lib', 'pages', 'files', 'filename']

    const type1 = {pathname: 'pages'}

    const types = [ type1 ]

    const example = filter(pieces, types)

    const expected = [type1]

    expect(example).toEqual(expected);
  });

});
