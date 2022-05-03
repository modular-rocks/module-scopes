import metadata from './index.js'

describe("ModularRocks Scope metadata", () => {
  test("Files are refined", () => {
    const scope = {}
    const relativePath = '/one/two/three/'
    const section = {
      [relativePath]: [
        '1.hello.js',
        '2.hi.js',
        '3.bye.js',
        '4.goodbye.js',
      ]
    }

    const example = metadata(scope, section)(relativePath)

    const expected = [
      {
        num: '1',
        name: 'hello',
        fileEnhancer: 'js',
        filename: '1.hello.js'
      },
      { num: '2', name: 'hi', fileEnhancer: 'js', filename: '2.hi.js' },
      { num: '3', name: 'bye', fileEnhancer: 'js', filename: '3.bye.js' },
      {
        num: '4',
        name: 'goodbye',
        fileEnhancer: 'js',
        filename: '4.goodbye.js'
      }
    ]
    expect(example).toEqual(expected);
  });

  test("Files with enhancers are refined", () => {
    const scope = {}
    const relativePath = '/one/two/three/'
    const section = {
      [relativePath]: [
        '1.hello.js',
        '2.hi.js',
        '3.bye.has-enhancers.cool.js',
        '4.goodbye.js',
      ]
    }

    const example = metadata(scope, section)(relativePath)

    const expected = [
      {
        num: '1',
        name: 'hello',
        fileEnhancer: 'js',
        filename: '1.hello.js'
      },
      { num: '2', name: 'hi', fileEnhancer: 'js', filename: '2.hi.js' },
      {
        num: '3',
        name: 'bye',
        fileEnhancer: 'js',
        filename: '3.bye.has-enhancers.cool.js',
        enhancers: ['cool', 'has-enhancers'] },
      {
        num: '4',
        name: 'goodbye',
        fileEnhancer: 'js',
        filename: '4.goodbye.js'
      }
    ]
    expect(example).toEqual(expected);
  });
});
