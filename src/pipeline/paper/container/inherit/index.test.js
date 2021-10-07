import inheritScopes, { inheritScope } from './index.js'

describe("Inherit tools", () => {
  test("inheritScope returns false if its not available", () => {
    const example = inheritScope('', {}, {})
    expect(example).toEqual(false);
  });

  test("inheritScope copies original", () => {
    const original = {rocks: {hello: ''}}
    const copy = {}
    const container = {'/': copy}
    inheritScope('/', original, container)
    expect(copy.rocks.hello).toEqual('');
  });

  test("inheritScopes copies original 2", () => {
    const scopePath = '/one/two/three/four/'
    const original = {
      rocks: {
        'four': 3,
        'three': 3,
        'two': 3,
        'one': 3
      }
    }
    const container = {"/one/": original, "/one/two/three/four/": {}}

    inheritScopes(scopePath, container)
    expect(container[scopePath].rocks['four']).toEqual(3)
  });
})
