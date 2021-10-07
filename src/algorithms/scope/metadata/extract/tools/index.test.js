import {
  hasNumber,
  hasExtensions,
  setNumber,
  setName,
  setFileExtension,
  setExtensions
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

  test("ModularRocks unpack hasExtension with extension", () => {
    const pieces = 'setup.redux.js'.split('.')
    const obj = {name: 'setup'}
    const example = hasExtensions(obj, pieces)
    expect(example).toEqual(true);
  });

  test("ModularRocks unpack hasExtension without extension", () => {
    const pieces = 'setup.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileExtension(obj, pieces)
    const example = hasExtensions(obj, pieces)
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

  test("ModularRocks unpack setFileExtension", () => {
    const pieces = '1.setup.js'.split('.')
    const obj = {}
    setFileExtension(obj, pieces)
    expect(obj.fileExtension).toEqual('js');
  });

  test("ModularRocks unpack setExtension", () => {
    const pieces = '1.setup.redux.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileExtension(obj, pieces)
    expect(obj.extensions).toEqual(['redux']);
  });

  test("ModularRocks unpack setExtension 2", () => {
    const pieces = '1.setup.redux.react.js'.split('.')
    const obj = {}
    setName(obj, pieces)
    setFileExtension(obj, pieces)
    expect(obj.extensions).toEqual(['react', 'redux']);
  });
});
