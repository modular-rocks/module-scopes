import { add, get, load } from './index.js'

describe("ModularRocks paper prep extend config", () => {
  test("config is empty", () => {
    const example = get()
    expect(example).toEqual({});
  });
  test("add works", () => {
    const fn = () => console.log('hi')
    add('cool', fn)
    const example = get()
    expect(example.cool).toEqual(fn);
  });
});
