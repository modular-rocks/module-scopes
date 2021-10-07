import extract from './index.js'

describe("ModularRocks unpack extract", () => {
  test("ModularRocks unpack extract creates a filename", () => {
    const obj = extract('1.setup.redux.js')
    expect(obj.filename).toEqual('1.setup.redux.js');
  });

  test("ModularRocks unpack extract 2", () => {
    const obj = extract('1.setup.redux.js')
    expect(obj.fileExtension).toEqual('js');
  });

  test("ModularRocks unpack extract 2", () => {
    const obj = extract('1.setup.redux.js')
    expect(obj.extensions).toEqual(['redux']);
  });

  test("ModularRocks unpack extract 3", () => {
    const obj = extract('1.setup.redux.js')
    expect(obj.name).toEqual('setup');
  });

  test("ModularRocks unpack extract 4", () => {
    const obj = extract('1.setup.redux.js')
    expect(obj.num).toEqual('1');
  });

  test("ModularRocks unpack extract 5", () => {
    const obj = extract('setup.redux.js')
    expect(obj.name).toEqual('setup');
  });

  test("ModularRocks unpack extract 6", () => {
    const obj = extract('setup.redux.js')
    expect(obj.extensions).toEqual(['redux']);
  });
});
