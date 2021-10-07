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
        fileExtension: 'js',
        filename: '1.hello.js'
      },
      { num: '2', name: 'hi', fileExtension: 'js', filename: '2.hi.js' },
      { num: '3', name: 'bye', fileExtension: 'js', filename: '3.bye.js' },
      {
        num: '4',
        name: 'goodbye',
        fileExtension: 'js',
        filename: '4.goodbye.js'
      }
    ]
    expect(example).toEqual(expected);
  });

  test("Files with extensions are refined", () => {
    const scope = {}
    const relativePath = '/one/two/three/'
    const section = {
      [relativePath]: [
        '1.hello.js',
        '2.hi.js',
        '3.bye.has-extensions.cool.js',
        '4.goodbye.js',
      ]
    }

    const example = metadata(scope, section)(relativePath)

    const expected = [
      {
        num: '1',
        name: 'hello',
        fileExtension: 'js',
        filename: '1.hello.js'
      },
      { num: '2', name: 'hi', fileExtension: 'js', filename: '2.hi.js' },
      {
        num: '3',
        name: 'bye',
        fileExtension: 'js',
        filename: '3.bye.has-extensions.cool.js',
        extensions: ['cool', 'has-extensions'] },
      {
        num: '4',
        name: 'goodbye',
        fileExtension: 'js',
        filename: '4.goodbye.js'
      }
    ]
    expect(example).toEqual(expected);
  });
});
