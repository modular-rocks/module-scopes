import push from './index.js'

describe("Paper push", () => {
  test("if an extension exists it is returned", () => {
    const decorators = { }
    decorators.x = () => 'hello'
    expect(push(decorators)('x')).toEqual(decorators.x);
  });

  test("if an extension does not exist undefined is returned", () => {
    const decorators = { }
    expect(push(decorators)('x')).toEqual(undefined);
  });

  test("if an extension exists and has a default function, default is returned", () => {
    const decorators = { }
    decorators.x = { default: () => 'hello' }
    expect(push(decorators)('x')).toEqual(decorators.x.default);
  });
})
