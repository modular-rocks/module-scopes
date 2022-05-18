import inherit from './container/inherit';
import clean from './clean';
import container from './container';
import reload from './reload';
import { set } from '../../store';
import { get } from '../../decorators';

var asc = function asc(a, b) {
  return a.length - b.length;
};
var createContainer = function createContainer() {
  return { '/': {} };
};

var wrap = function wrap(metadataContainer, opts) {
  opts.factories = opts.factories.map(reload);
  var scopes = createContainer();
  var enhancedContainer = createContainer();

  var env = {
    data: {
      container: scopes,
      enhanced: enhancedContainer
    },
    metadata: {
      container: metadataContainer
    },
    config: {
      opts: opts,
      decorators: get()
    }
  };

  set(opts.base, 'env', env);

  Object.keys(metadataContainer).sort(asc).forEach(container(env));
  enhancedContainer = clean(enhancedContainer);
  return enhancedContainer;
};

export { wrap, inherit };