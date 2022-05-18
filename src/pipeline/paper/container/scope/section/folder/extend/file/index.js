const type = 'File'

export default function extend(env) {
  const { modules } = env
  const ex = env.config.decorators

  return (meta, i) => {
    const prevFn = modules[i]
    if (!meta.decorators || !meta.decorators.length) return prevFn

    const decorators = meta.decorators.map((x) => ex[x]).filter(Boolean)
    let fn = prevFn
    const pipe = decorators.map((m) => {
      fn = (m.default || m).apply(this, [fn, env, type])
    })
    return fn
  }
}
