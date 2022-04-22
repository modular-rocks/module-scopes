const type = 'File'

export default function extend(env) {
  const { modules } = env
  const ex = env.config.extensions

  return (meta, i) => {
    const prevFn = modules[i]
    if (!meta.extensions || !meta.extensions.length) return prevFn

    const extensions = meta.extensions.map((x) => ex[x]).filter(Boolean)
    let fn = prevFn
    const pipe = extensions.map((m) => {
      fn = (m.default || m).apply(this, [fn, env, type])
    })
    return fn
  }
}
