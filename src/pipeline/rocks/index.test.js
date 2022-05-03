import scopes from '../.././test-examples/json/cut.js'
import refined from '../.././test-examples/json/refined.js'

import { refine } from './index.js'
import { Scope } from '../.././factories'

const type1 = new Scope('rocks')
type1.index = 0

const config = {
  regex: /\.js?$/,
  factories: [
    type1
  ]
}

describe("ModularRocks rocks (unpack)", () => {
  test("ModularRocks unpack extract creates a filename", () => {
    const raw = refine(scopes, config)
    expect(raw).toEqual(refined);
  });
});
