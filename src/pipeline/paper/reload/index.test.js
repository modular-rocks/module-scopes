import reload from './index.js'
import { Scope, Logic, Procedural } from '../../../factories'

describe("Paper reload", () => {
  test("reload", () => {
    const type = {}
    expect(reload(type)).toEqual(type);
  });

  test("reload", () => {
    const type = {factory: 'Scope'}
    expect(reload(type).constructor).toEqual(Scope);
  });

  test("reload", () => {
    const type = {factory: 'Logic'}
    expect(reload(type).constructor).toEqual(Logic);
  });

  test("reload", () => {
    const type = {factory: 'Procedural'}
    expect(reload(type).constructor).toEqual(Procedural);
  });

  test("reload", () => {
    const type = {factory: 'Custom'}
    expect(reload(type)).toEqual(type);
  });
})
