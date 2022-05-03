const type = 'File'

export default function extend(env) {
  const { modules } = env
  const ex = env.config.enhancers

  return (meta, i) => {
    const prevFn = modules[i]
    if (!meta.enhancers || !meta.enhancers.length) return prevFn

    const enhancers = meta.enhancers.map((x) => ex[x]).filter(Boolean)
    let fn = prevFn
    const pipe = enhancers.map((m) => {
      fn = (m.default || m).apply(this, [fn, env, type])
    })
    return fn
  }
}
