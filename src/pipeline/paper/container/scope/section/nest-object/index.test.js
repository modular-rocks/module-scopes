import nestObject from './index.js'

describe("Paper push", () => {
  test("if an extension exists it is returned", () => {
    const obj = {}
    const path = '/one/two/three/'
    nestObject(path, obj)
    expect(obj.one.two.three).toEqual({});
  });
})
