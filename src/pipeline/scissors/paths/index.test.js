import paths from './index.js'

describe("ModularRocks Generate paths", () => {
  test("testing paths fn", () => {
    const path = '/the/base/hello/well/yes.js';
    const base = '/the/base'

    const expected = {
      "filename": "/yes.js",
      "folder": "/the/base/hello/well",
      "pieces": ["", "the", "base", "hello", "well", "yes.js"],
      "relative": "/the/base/hello/well/yes.js"
    }

    expect(paths(path, base)).toEqual(expected);
  });
});
