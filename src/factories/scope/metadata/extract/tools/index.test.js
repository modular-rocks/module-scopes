import {
  hasNumber,
  hasEnhancers,
  setNumber,
  setName,
  setFileEnhancer,
  setEnhancers
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

  test("ModularRocks unpack hasEnhancer with extension", () => {
    const pieces = 'setup.redux.js'.split('.')
    const obj = {name: 'setup'}
    const example = hasEnhancers(obj, pieces)
    expect(example).toEqual(true);
  });

  test("ModularRocks unpack hasEnhancer without extension", () => {
    const pieces = 'setup.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileEnhancer(obj, pieces)
    const example = hasEnhancers(obj, pieces)
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

  test("ModularRocks unpack setFileEnhancer", () => {
    const pieces = '1.setup.js'.split('.')
    const obj = {}
    setFileEnhancer(obj, pieces)
    expect(obj.fileEnhancer).toEqual('js');
  });

  test("ModularRocks unpack setEnhancer", () => {
    const pieces = '1.setup.redux.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileEnhancer(obj, pieces)
    expect(obj.enhancers).toEqual(['redux']);
  });

  test("ModularRocks unpack setEnhancer 2", () => {
    const pieces = '1.setup.redux.react.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileEnhancer(obj, pieces)
    expect(obj.enhancers).toEqual(['react', 'redux']);
  });
});
