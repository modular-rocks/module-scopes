import metadata from './index.js'

describe("Paper metadata", () => {
  test("without extensions", () => {
    const relativeFolderPath = '/one/two/three/four/'
    const scope = { path: '/path/' }
    const type = { pathname: 'rocks' }
    const section = { scope, type }
    const env = { config: { opts: { root: '/zero/' } } }

    const example = metadata(relativeFolderPath, section, env)

    const expected = {
      action: 'four',
      name: 'four',
      extensions: [],
      relativeFolderPath: '/one/two/three/four/',
      relativePath: '/path/rocks/one/two/three/four/',
      absolutePath: '/zero/path/rocks/one/two/three/four/',
      relPathPieces: [ 'one', 'two', 'three', 'four' ],
      depth: 4,
      parentPath: '/one/two/three/',
      root: '/zero/'
    }

    expect(example).toEqual(expected);
  });


  test("with extensions", () => {
    const relativeFolderPath = '/one/two/three/four.ext1.ext2/'
    const scope = { path: '/path/' }
    const type = { pathname: 'rocks' }
    const section = { scope, type }
    const env = { config: { opts: { root: '/zero/' } } }

    const example = metadata(relativeFolderPath, section, env)

    const expected = {
      action: 'four.ext1.ext2',
      name: 'four',
      extensions: ['ext1', 'ext2'],
      relativeFolderPath: '/one/two/three/four.ext1.ext2/',
      relativePath: '/path/rocks/one/two/three/four.ext1.ext2/',
      absolutePath: '/zero/path/rocks/one/two/three/four.ext1.ext2/',
      relPathPieces: [ 'one', 'two', 'three', 'four.ext1.ext2' ],
      depth: 4,
      parentPath: '/one/two/three/',
      root: '/zero/'
    }

    expect(example).toEqual(expected);
  });
})
