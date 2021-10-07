import { Rocks, Paper, Scissors } from '../.././pipeline';

import prepare from '.././prepare';
import wrap from '.././wrap';

// const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x

export default (function (dir, opts) {
  opts.dir = dir;
  var collection = dir.keys();
  // const cleanDot = (x) => x[0] == '.' ? x.slice(1) : x

  var _prepare = prepare(collection, opts),
      scoped = _prepare.scoped,
      refined = _prepare.refined;

  var rocks = wrap(refined, dir, opts);
  var path = process.env.PWD + opts.root;
  return rocks[path];
});