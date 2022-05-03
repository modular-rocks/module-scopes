import push from './index.js'

describe("Paper push", () => {
  test("if an extension exists it is returned", () => {
    const enhancers = { }
    enhancers.x = () => 'hello'
    expect(push(enhancers)('x')).toEqual(enhancers.x);
  });

  test("if an extension does not exist undefined is returned", () => {
    const enhancers = { }
    expect(push(enhancers)('x')).toEqual(undefined);
  });

  test("if an extension exists and has a default function, default is returned", () => {
    const enhancers = { }
    enhancers.x = { default: () => 'hello' }
    expect(push(enhancers)('x')).toEqual(enhancers.x.default);
  });
})
