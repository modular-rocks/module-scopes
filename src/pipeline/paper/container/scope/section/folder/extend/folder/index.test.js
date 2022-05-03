import extend from './index.js'

describe("ModularRocks paper prep extend config configure", () => {
  test("folder works with extension", () => {
    const ext = (fn, env) => (action) => env.metadata.name
    const fn = () => 3

    const env = {
      data: {
        folder: {
          enhancers: [ext]
        }
      },
      metadata: {
        name: 'folder'
      }
    }

    const example = extend(fn, env)
    expect(example()).toEqual('folder');
  });

  test("folder works with extension", () => {
    const ext = (fn, env) => (action) => fn()
    const fn = () => 3

    const env = {
      data: {
        folder: {
          enhancers: [ext]
        }
      },
      metadata: {
        name: 'folder'
      }
    }

    const example = extend(fn, env)
    expect(example()).toEqual(3);
  });

  test("folder works with extension 2", () => {
    const ext = (fn, env) => (action) => {
      action.num = action.num * 5
      fn(action)
      return action.num
    }
    const ext2 = (fn, env) => (action) => {
      action.num = action.num * 5
      fn(action)
      return action.num
    }
    const fn = () => 3

    const env = {
      data: {
        folder: {
          enhancers: [ext, ext2]
        }
      },
      metadata: {
        name: 'folder'
      }
    }

    const example = extend(fn, env)
    expect(example({num: 5})).toEqual(125);
  });
});
