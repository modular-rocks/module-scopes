import clean from './index.js'

describe("Paper clean", () => {
  test("cleans empty scopes", () => {
    const scope1 = {hello: 'hi'}
    const container = {
      '/one/two/': scope1,
      '/one/two/three': {}
    }

    const example = clean(container)

    expect(example['/one/two/three']).toEqual(undefined);
    expect(example.root).toEqual(scope1);
  });
})
