import inherit from './container/inherit'
import clean from './clean'
import container from './container'
import reload from './reload'
import { set } from '../../store'
import { get } from '../../extensions'

const asc = (a,b) => a.length - b.length
const createContainer = () => ({'/': {}})

const wrap = (metadataContainer, opts) => {
  opts.types = opts.types.map(reload)
  let scopes = createContainer()
  let enhancedContainer = createContainer()

  const env = {
    data: {
      container: scopes,
      enhanced: enhancedContainer
    },
    metadata: {
      container: metadataContainer
    },
    config: {
      opts,
      extensions: get()
    }
  }

  set(opts.base, 'env', env)

  Object.keys(metadataContainer).sort(asc).forEach(container(env))
  enhancedContainer = clean(enhancedContainer)
  return enhancedContainer
}

export { wrap, inherit }
