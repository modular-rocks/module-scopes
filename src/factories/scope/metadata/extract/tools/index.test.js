import {
  hasNumber,
  hasDecorators,
  setNumber,
  setName,
  setFileDecorator,
  setDecorators
} from './index.js'

describe("ModularRocks unpack tools", () => {
  test("ModularRocks unpack tools test hasNumber with number", () => {
    const pieces = '1.setup.redux.js'.split('.')
    const example = hasNumber(pieces)
    expect(example).toEqual(true);
  });

  test("ModularRocks unpack tools test hasNumber without number", () => {
    const pieces = 'setup.redux.js'.split('.')
    const example = hasNumber(pieces)
    expect(example).toEqual(false);
  });

  test("ModularRocks unpack hasDecorator with extension", () => {
    const pieces = 'setup.redux.js'.split('.')
    const obj = {name: 'setup'}
    const example = hasDecorators(obj, pieces)
    expect(example).toEqual(true);
  });

  test("ModularRocks unpack hasDecorator without extension", () => {
    const pieces = 'setup.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileDecorator(obj, pieces)
    const example = hasDecorators(obj, pieces)
    expect(example).toEqual(false);
  });


  test("ModularRocks unpack setNumber 1", () => {
    const pieces = '1.setup.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    expect(obj.num).toEqual('1');
  });

  test("ModularRocks unpack setNumber 1", () => {
    const pieces = '1.setup.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    expect(obj.name).toEqual('setup');
  });

  test("ModularRocks unpack setNumber 2", () => {
    const pieces = 'setup.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    expect(obj.name).toEqual('setup');
  });

  test("ModularRocks unpack setFileDecorator", () => {
    const pieces = '1.setup.js'.split('.')
    const obj = {}
    setFileDecorator(obj, pieces)
    expect(obj.fileDecorator).toEqual('js');
  });

  test("ModularRocks unpack setDecorator", () => {
    const pieces = '1.setup.redux.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileDecorator(obj, pieces)
    expect(obj.decorators).toEqual(['redux']);
  });

  test("ModularRocks unpack setDecorator 2", () => {
    const pieces = '1.setup.redux.react.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileDecorator(obj, pieces)
    expect(obj.decorators).toEqual(['react', 'redux']);
  });
});
