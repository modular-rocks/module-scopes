import reload from './index.js'
import { Scope, Logic, Enhanced } from '../../../algorithms'

describe("Paper reload", () => {
  test("reload", () => {
    const type = {}
    expect(reload(type)).toEqual(type);
  });

  test("reload", () => {
    const type = {algorithm: 'Scope'}
    expect(reload(type).constructor).toEqual(Scope);
  });

  test("reload", () => {
    const type = {algorithm: 'Logic'}
    expect(reload(type).constructor).toEqual(Logic);
  });

  test("reload", () => {
    const type = {algorithm: 'Enhanced'}
    expect(reload(type).constructor).toEqual(Enhanced);
  });

  test("reload", () => {
    const type = {algorithm: 'Custom'}
    expect(reload(type)).toEqual(type);
  });
})
