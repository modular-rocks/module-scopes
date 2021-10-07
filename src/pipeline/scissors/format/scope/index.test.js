import lib from './index.js'

describe("ModularRocks Format scope", () => {
  test("ModularRocks Format scope works", () => {

    const scope = {}
    const folder = '/dir'
    const types = [
      {
        pathname: 'rocks',
        build: () => { return {} }
      },
      {
        pathname: 'pages',
        build: () => []
      },
    ]

    const example = lib(scope, types)(folder)
    const expected = [{}, []]

    expect(example).toEqual(expected);
  });

  test("ModularRocks Format scope adds key", () => {

    const scope = {}
    const folder = '/dir'
    const types = [
      {
        pathname: 'rocks',
        build: () => { return {} }
      },
      {
        pathname: 'pages',
        build: () => []
      },
    ]

    lib(scope, types)(folder)

    const example = Object.keys(scope)
    const expected = ['/dir']

    expect(example).toEqual(expected);
  });
});
