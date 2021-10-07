import lib from './index.js'

describe("ModularRocks Format scopes", () => {
  test("ModularRocks Format scopes should add the correct keys", () => {

    const scope = {}
    const relative = '/root/dir/grand/parent/child'
    const type1 = { build: () => { return {} }   }
    const types = [
      {
        build: () => { return {} }
      },
      {
        build: () => []
      },
    ]

    lib(relative, scope, types, [type1])

    const example = Object.keys(scope)
    const expected = ['/root/dir/grand/parent/child/', '/root/dir/grand/parent/', '/root/dir/grand/', '/root/dir/', '/root/', '//', '/']

    expect(example).toEqual(expected);
  });
});
