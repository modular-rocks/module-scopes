import run from './index.js'

const fn1 = (action) => action.x = action.x * 2
const fn2 = (action) => action.x = action.x * 2
const fn3 = (action) => (action) => action.y
const fn4 = (action) => {
  action.x = action.x * 2
}

describe("ModularRocks paper run", () => {
  test("run computes 1", () => {
    const fns = [fn1]
    const example = run(fns, {x: 2}, {})
    expect(example).toEqual(4);
  });

  test("run computes 2", () => {
    const fns = [fn1, fn2]
    const example = run(fns, {x: 2}, {})
    expect(example).toEqual(8);
  });

  test("run computes when a function is returned", () => {
    const fns = [fn1, fn2, fn3]
    const example = run(fns, {x: 2, y: 9}, {})
    expect(example).toEqual(9);
  });

  test("run returns action if last function returns undefined", () => {
    const fns = [fn1, fn2, fn4]
    const example = run(fns, {x: 2, y: 9}, {})
    expect(example).toEqual({x: 16, y: 9});
  });

  test("scope is available", () => {
    const fn5 = (action, rocks) => {
      rocks.cool(action)
    }

    const scope = {
      cool: (action) => action.x = action.x * 100
    }

    const fns = [fn2, fn5]
    const example = run(fns, {x: 2, y: 9}, {scope})
    expect(example).toEqual({x: 400, y: 9});
  });
});
