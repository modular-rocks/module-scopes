import push from './index.js'

describe("Paper push", () => {
  test("if an extension exists it is returned", () => {
    const extensions = { }
    extensions.x = () => 'hello'
    expect(push(extensions)('x')).toEqual(extensions.x);
  });

  test("if an extension does not exist undefined is returned", () => {
    const extensions = { }
    expect(push(extensions)('x')).toEqual(undefined);
  });

  test("if an extension exists and has a default function, default is returned", () => {
    const extensions = { }
    extensions.x = { default: () => 'hello' }
    expect(push(extensions)('x')).toEqual(extensions.x.default);
  });
})
