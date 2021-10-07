import load from './load';

var find = function find(metadata, env) {
  return function (meta) {
    var _env$config$opts = env.config.opts,
        root = _env$config$opts.root,
        _dirKeys = _env$config$opts._dirKeys;
    var absolutePath = metadata.absolutePath;

    var fn = load(meta, absolutePath, env.config.dir, root, _dirKeys);
    return fn;
  };
};

export default find;