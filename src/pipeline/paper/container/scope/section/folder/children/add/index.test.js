import add from './index.js'

describe("ModularRocks Pipeline Paper add", () => {
  test("add works", () => {
    const children = {one: 1, two: 2, three: 3}
    const enhanced = {}
    add(enhanced, children)
    expect(enhanced.one).toEqual(1);
    expect(enhanced.two).toEqual(2);
    expect(enhanced.three).toEqual(3);
  });
})
