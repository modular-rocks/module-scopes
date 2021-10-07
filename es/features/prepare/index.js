import { Rocks, Scissors } from '../.././pipeline';

export default (function (collection, opts) {
  var scoped = Scissors.cut(opts)(collection);
  var refined = Rocks.refine(scoped, opts);
  return {
    scoped: scoped,
    refined: refined
  };
});