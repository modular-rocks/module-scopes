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
        fileDecorator: 'js',
        filename: '1.hello.js'
      },
      { num: '2', name: 'hi', fileDecorator: 'js', filename: '2.hi.js' },
      { num: '3', name: 'bye', fileDecorator: 'js', filename: '3.bye.js' },
      {
        num: '4',
        name: 'goodbye',
        fileDecorator: 'js',
        filename: '4.goodbye.js'
      }
    ]
    expect(example).toEqual(expected);
  });

  test("Files with decorators are refined", () => {
    const scope = {}
    const relativePath = '/one/two/three/'
    const section = {
      [relativePath]: [
        '1.hello.js',
        '2.hi.js',
        '3.bye.has-decorators.cool.js',
        '4.goodbye.js',
      ]
    }

    const example = metadata(scope, section)(relativePath)

    const expected = [
      {
        num: '1',
        name: 'hello',
        fileDecorator: 'js',
        filename: '1.hello.js'
      },
      { num: '2', name: 'hi', fileDecorator: 'js', filename: '2.hi.js' },
      {
        num: '3',
        name: 'bye',
        fileDecorator: 'js',
        filename: '3.bye.has-decorators.cool.js',
        decorators: ['cool', 'has-decorators'] },
      {
        num: '4',
        name: 'goodbye',
        fileDecorator: 'js',
        filename: '4.goodbye.js'
      }
    ]
    expect(example).toEqual(expected);
  });
});
