import filter from './index.js'

describe("ModularRocks Generate match filter", () => {
  test("match filter works", () => {

    const pieces = ['root', 'lib', 'pages', 'files', 'filename']

    const type1 = {pathname: 'pages'}

    const factories = [ type1 ]

    const example = filter(pieces, factories)

    const expected = [type1]

    expect(example).toEqual(expected);
  });

});
