import {
  splitPath, rejectBlank, pieces2Path, dropLast, last, lastInPath, uniq,
  parent, path2Pieces, unshiftBlank, rejectUndefined, createFolder, resolve,
  splitName, createPath, extensionIndex
} from './index.js'

describe("ModularRocks Generate tools", () => {
  test("splitPath works", () => {
    const path = '/hello/well/yes';
    expect(splitPath(path)).toEqual(['', 'hello', 'well', 'yes']);
  });

  test("rejectBlank works", () => {
    const arr = ['', 'hello', 'well', 'yes'];
    expect(rejectBlank(arr)).toEqual(['hello', 'well', 'yes']);
  });

  test("rejectUndefined works", () => {
    const arr = ['', 'hello', 'well', 'yes', undefined];
    expect(rejectUndefined(arr)).toEqual(['', 'hello', 'well', 'yes']);
  });

  test("pieces2Path works", () => {
    const arr = ['', 'hello', 'well', 'yes'];
    expect(pieces2Path(arr)).toEqual('/hello/well/yes');
  });

  test("dropLast works", () => {
    const arr = ['', 'hello', 'well', 'yes'];
    expect(dropLast(arr)).toEqual(['', 'hello', 'well']);
  });

  test("lastInPath works", () => {
    const arr = ['', 'hello', 'well', 'yes'];
    expect(lastInPath(arr)).toEqual('yes');
  });

  test("last works", () => {
    const arr = ['', 'hello', 'well', 'yes'];
    expect(last(arr)).toEqual('yes');
  });

  test("uniq works", () => {
    const arr = ['well', 'hello', 'well', 'yes', 'yes'];
    expect(uniq(arr)).toEqual(['well', 'hello', 'yes']);
  });

  test("addRoot works", () => {
    const arr = ['hello', 'well', 'yes'];
    expect(unshiftBlank(arr)).toEqual(['', 'hello', 'well', 'yes']);
  });

  test("path2Pieces works", () => {
    const path = '/hello/well/yes';
    expect(path2Pieces(path)).toEqual(['hello', 'well', 'yes']);
  });

  test("parent works", () => {
    const path = '/grand/parent/child';
    expect(parent(path)).toEqual('/grand/parent');
  });

  test("createFolder keys are correct", () => {
    const parent = {}
    const obj = {}
    createFolder(parent, 'test', obj)
    const keys = Object.keys(parent)
    expect(keys).toEqual(['test']);
  });

  test("createFolder added the object", () => {
    const parent = {}
    const obj = {}
    const example = createFolder(parent, 'test', obj)
    expect(parent['test']).toEqual(obj);
  });

  test("resolve works", () => {
    const base = '/hello/well/yes/now/index.js';
    const rel = '../.././index.js';
    expect(resolve(base, rel)).toEqual('/hello/well/yes/index.js');
  });

  test("Scissor uniq works", () => {
    const arr = [1,2,3,4,4,5,44,4]
    expect(uniq(arr)).toEqual([1,2,3,4,5,44]);
  });

  test("splitName works without a dot", () => {
    const example = splitName('name')
    expect(example).toEqual(['name']);
  });

  test("splitName works with a dot", () => {
    const example = splitName('name.ext')
    expect(example[0]).toEqual('name');
    expect(example[1]).toEqual('ext');
  });

  test("createPath works", () => {
    const example = createPath('/one/two/three/', '/four/five/six', {pathname: 'rocks'})
    expect(example).toEqual('/one/two/three/rocks/four/five/six/');
  });

  test("extensionIndex works", () => {
    const example = extensionIndex(['one', 'two', 'three.ext', 'four'])
    expect(example).toEqual(2);
  });

  test("extensionIndex works 2", () => {
    const example = extensionIndex(['one', 'two', 'three', 'four'])
    expect(example).toEqual(-1);
  });
});
