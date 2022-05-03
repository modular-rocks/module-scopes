import extend from './index.js'
import { add, get } from '../../../../../../../../enhancers'

describe("ModularRocks paper prep extend config configure", () => {
  test("file works with extension", () => {
    const ext = (fn, env) => (action) => env.metadata.name
    const fn = () => 3

    add('cool', ext)

    const env = {
      modules: [fn],
      metadata: {
        name: 'folder'
      },
      files: [
        {
          name: 'hello',
          enhancers: ['cool']
        }
      ],
      config: {
        enhancers: get()
      }
    }

    const example = env.files.map(extend(env))[0]
    expect(example()).toEqual('folder');
  });

  test("file works without extension", () => {
    const fn = () => "test"

    const env = {
      modules: [fn],
      metadata: {
        name: 'folder'
      },
      files: [
        {
          name: 'hello',
          enhancers: ['fake']
        }
      ],
      config: {
        enhancers: get()
      }
    }

    const example = env.files.map(extend(env))[0]
    expect(example).toEqual(fn);
  });

  test("file works without extension 2", () => {
    const fn = () => "test"
    const env = {
      modules: [fn],
      metadata: {
        name: 'folder'
      },
      files: [
        {
          name: 'hello',
        }
      ],
      config: {
        enhancers: get()
      }
    }

    const example = env.files.map(extend(env))[0]
    expect(example).toEqual(fn);
  });

  test("multiple enhancers work", () => {
    let number = 2
    const fn = () => 3

    const ext = () => {
      number = number * 2
      return (action) => number
    }

    const ext2 = () => {
      number = number * 2
      return (action) => number
    }

    add('cool', ext)
    add('calm', ext2)

    const env = {
      modules: [fn],
      metadata: {
        name: 'folder'
      },
      files: [
        {
          name: 'hello',
          enhancers: ['cool', 'calm']
        }
      ],
      config: {
        enhancers: get()
      }
    }

    const example = env.files.map(extend(env))[0]
    expect(example()).toEqual(8);
  });

  test("multiple enhancers work 2", () => {
    const fn = (action) => action.number

    const ext = (fn, env) => {
      return (action, scope) => {
        action.number = action.number * 2
        return fn(action, scope, env)
      }
    }

    const ext2 = (fn, env) => {
      return (action, scope) => {
        action.number = action.number * 10
        return fn(action, scope, env)
      }
    }

    add('cool', ext)
    add('calm', ext2)

    const env = {
      modules: [fn],
      metadata: {
        name: 'folder'
      },
      files: [
        {
          name: 'hello',
          enhancers: ['cool', 'calm']
        }
      ],
      config: {
        enhancers: get()
      }
    }

    const example = env.files.map(extend(env))[0]
    expect(example({number: 2})).toEqual(40);
  });
});
