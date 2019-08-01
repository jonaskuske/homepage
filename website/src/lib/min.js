import { h as e } from 'hyperapp'
let t = e => null != e,
  n = e => Object.prototype.toString.call(e),
  r = e => '[object Object]' === n(e),
  a = e => 'string' == typeof e,
  o = e =>
    Object.entries(e).reduce(
      (e, [t, n]) => (
        Array.isArray(n) && 1 === n.length ? (e[t] = n[0]) : r(n) ? (e[t] = o(n)) : (e[t] = n), e
      ),
      {},
    ),
  l = ({
    locales: l,
    defaultLanguage: i = Object.keys(l)[0],
    initialLanguage: s = i,
    fallbackToDefault: c = !0,
    DEBUG: u = !1,
  }) => {
    let f = e => {
        console.warn(`[i18n]: ${e}`)
      },
      g = e => {
        throw (u && console.error(`[i18n]: ${e}`), Error(`[i18n]: ${e}`))
      },
      d = e => {
        if (e && a(e)) return e
        g('The translate function requires a unique identifier of type "string" as first argument.')
      },
      p = e('br'),
      h = /<br\s?\/?>/i,
      $ = (e, t, n, o) => {
        let l = n.split('.')
        let i = e[t]
        for (let e of l)
          r(i) ? (i = i[e]) : g(`Can't access "${n}" in locale "${t}" – the path is invalid.`)
        return (
          a(i) && (i = [i]),
          Array.isArray(i) || g(`"${n}" not found in locale "${t}".`),
          (i = ((e, t = [], n) => {
            let r = e.length,
              o = t.length,
              l = e.length - 1
            return (
              o !== r &&
                o !== l &&
                f(
                  `Invalid amount of values passed to translation at "${n}":\nTranslation requires ${l} or ${r} values, but received ${o} values.`,
                ),
              e.reduce((e, n, r) => e + n + (a(t[r]) ? t[r] : ''), '')
            )
          })(i, o, n)),
          h.test(i) ? (e => e.split(h).reduce((e, t) => (e.push(t, p), e), []))(i) : i
        )
      },
      y = l,
      b = e => {
        if (r(y[e])) return y[e]
        if ((e => 'function' == typeof e)(y[e])) {
          let t = y[e]()
          if (r(t)) return (y[e] = t)
          if ((e => '[object Promise]' === n(e))(t))
            return t.then(t => {
              if (((e => '[object Module]' === n(e))(t) && t.__esModule && (t = t.default), r(t)))
                return (y[e] = t)
              g(`Couldn't resolve locale ${e}.`)
            })
        }
        g(`Couldn't resolve locale "${e}".`)
      },
      v = Object.create(null),
      m = (e, n = '') => {
        n && (n += '.')
        let a = (t, ...r) => {
          let a = n + d(t)
          try {
            return $(y, e, a, r)
          } catch (e) {
            if (!c) throw e
            return (
              (e => {
                u && console.log(`[i18n]: ${e}`)
              })(`No match for "${a}", using default locale ("${i}").`),
              $(y, i, a, r)
            )
          }
        }
        return (
          (a.forNamespace = t => m(e, n + t)),
          (a.inline = o => (l, ...s) => {
            if (e === i) {
              ;((e, n) => {
                if (v[e]) return
                let a = e.split('.'),
                  o = a.pop(),
                  l = y[i]
                for (let n of a)
                  (l[n] = t(l[n]) ? l[n] : Object.create(null)),
                    r(l[n]) || g(`Can't access ${e} – the path is invalid.`),
                    (l = l[n])
                l[o]
                  ? f(
                      `Can't add inline translation for "${e}" to dictionary: key already has a value.`,
                    )
                  : ((l[o] = Array.isArray(n) ? Array.from(n) : n), (v[e] = !0))
              })(n + d(o), l)
            }
            return a(o, ...s)
          }),
          (a.namespace = n),
          a
        )
      },
      j = e => ({ language: e, t: m(e) })
    return {
      state: j(s),
      actions: {
        setLanguage: e => (t, n) =>
          b(e)
            .then(t => (n._updateState(e), { language: e, locale: t }))
            .catch(() => g(`Can't set language to "${e}", no matching locale found.`)),
        _updateState: e => j(e),
      },
      resolveInitialLanguage: () => b(s),
      getCurrentDictionary: () => o(y),
    }
  }
export { l as createI18n }
