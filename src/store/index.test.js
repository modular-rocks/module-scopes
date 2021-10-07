import { save, get, set, getStore } from './index.js'

describe("ModularRocks paper store", () => {
  test("ModularRocks store save", () => {
    const env = {
      config: {
        opts: {
          root: 'hello'
        }
      }
    }
    save('hello', 'env', env)
    expect(get('hello', 'env')).toEqual(env);
  });

  test("ModularRocks store getStore", () => {
    const env = {
      config: {
        opts: {
          root: 'hello'
        }
      }
    }
    save('hello', 'env', env)
    expect(getStore()).toEqual({hello: {env: env}});
  });

  test("ModularRocks store set", () => {
    const env = {
      config: {
        opts: {
          root: 'hello'
        }
      }
    }
    set('foo bar', 'env', env)
    expect(get('foo bar', 'env')).toEqual(env);
  });
});
