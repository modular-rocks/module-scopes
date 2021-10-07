import collect from './index.js'

describe("ModularRocks paper collect remaining", () => {
  test("", () => {
    const obj = {}
    const children = {
      '/one/two/': {}
    }

    collect(obj, children)

    expect(obj.one.two).toEqual({});
    expect(obj['/one/two/']).toEqual(undefined);
  });
});
