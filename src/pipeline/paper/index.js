import inherit from './container/inherit'
import clean from './clean'
import container from './container'
import reload from './reload'
import { set } from '../../store'
import { get } from '../../enhancers'

const asc = (a,b) => a.length - b.length
const createContainer = () => ({'/': {}})

const wrap = (metadataContainer, opts) => {
  opts.factories = opts.factories.map(reload)
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
      enhancers: get()
    }
  }

  set(opts.base, 'env', env)

  Object.keys(metadataContainer).sort(asc).forEach(container(env))
  enhancedContainer = clean(enhancedContainer)
  return enhancedContainer
}

export { wrap, inherit }
