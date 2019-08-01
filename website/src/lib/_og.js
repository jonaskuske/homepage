import { h } from 'hyperapp'

const isDef = object => object != undefined
const toString = object => Object.prototype.toString.call(object)
const isPlainObject = object => '[object Object]' === toString(object)
const isFunction = object => typeof object === 'function'
const isPromise = object => '[object Promise]' === toString(object)
const isModule = object => '[object Module]' === toString(object)

const replaceArrays = object => {
  return Object.entries(object).reduce((obj, [key, value]) => {
    if (Array.isArray(value) && value.length === 1) obj[key] = value[0]
    else if (isPlainObject(value)) obj[key] = replaceArrays(value)
    else obj[key] = value
    return obj
  }, {})
}

const createI18n = ({
  locales,
  defaultLanguage = Object.keys(locales)[0],
  initialLanguage = defaultLanguage,
  fallbackToDefault = true,
}) => {
  let DEBUG = false
  const log = message => {
    if (DEBUG) console.log(`[i18n]: ${message}`)
  }
  const warn = message => {
    console.warn(`[i18n]: ${message}`)
  }
  const throwError = message => {
    if (DEBUG) console.error(`[i18n]: ${message}`)
    throw Error(`[i18n]: ${message}`)
  }

  const verifyId = id => {
    if (id && typeof id === 'string') return id
    throwError(
      'The translate function requires a unique identifier of type "string" as first argument.',
    )
  }

  const Linebreak = h('br')
  const linebreakRegex = /<br\s?\/?>/i
  const insertLinebreaks = string => {
    return string.split(linebreakRegex).reduce((arr, str) => (arr.push(str, Linebreak), arr), [])
  }

  const interpolate = (strings, values = [], id) => {
    const strLength = strings.length, valueLength = values.length // prettier-ignore
    const strLengthWithoutLast = strings.length - 1

    if (valueLength !== strLength && valueLength !== strLengthWithoutLast) {
      warn(
        `Invalid amount of values passed to translation at "${id}":\nTranslation requires ${strLengthWithoutLast} or ${strLength} values, but received ${valueLength} values.`,
      )
    }

    return strings.reduce((fullMessage, substring, index) => {
      const value = typeof values[index] === 'string' ? values[index] : ''
      return fullMessage + substring + value
    }, '')
  }

  const getMessage = (dictionary, langKey, id, values) => {
    const keyPath = id.split('.')
    let message = dictionary[langKey]

    for (const key of keyPath) {
      if (isPlainObject(message)) message = message[key]
      else throwError(`Can't access "${id}" in locale "${langKey}" – the path is invalid.`)
    }

    if (typeof message === 'string') message = [message]
    if (!Array.isArray(message)) throwError(`"${id}" not found in locale "${langKey}".`)

    message = interpolate(message, values, id)
    return linebreakRegex.test(message) ? insertLinebreaks(message) : message
  }

  const dictionary = locales

  const resolveLocale = (langKey, sync = false) => {
    const resolve = el => (sync ? el : Promise.resolve(el))
    if (isPlainObject(dictionary[langKey])) return resolve(dictionary[langKey])

    if (isFunction(dictionary[langKey])) {
      const returnObject = dictionary[langKey]()
      if (isPlainObject(returnObject)) return resolve((dictionary[langKey] = returnObject))

      if (!sync && isPromise(returnObject)) {
        return returnObject.then(result => {
          if (isModule(result) && result.__esModule) result = result.default
          if (isPlainObject(result)) return (dictionary[langKey] = result)
          else throwError(`Couldn't resolve locale ${langKey}.`)
        })
      }
    }

    throwError(`Couldn't resolve locale "${langKey}"${sync ? ' synchronously' : ''}.`)
  }

  let defaultLocaleIsAsync = false
  try {
    const res = resolveLocale(defaultLanguage, true)
    dictionary[defaultLanguage] = res
  } catch (_) {
    defaultLocaleIsAsync = true
    if (fallbackToDefault) {
      throwError(
        `Option "fallbackToDefault" is only available when the default locale is loaded synchronously.\nPass { fallbackToDefault: false } as option when calling createI18n() if you want to use async default locales.`,
      )
    }
  }

  const addedIds = Object.create(null)
  const addToDictionary = (id, value) => {
    if (defaultLocaleIsAsync) {
      throwError(
        `Can't use inline translations when the default locale ("${defaultLanguage}") is async.`,
      )
    }
    if (addedIds[id]) return

    let keyPath = id.split('.'), targetKey = keyPath.pop() // prettier-ignore
    let nested = dictionary[defaultLanguage]

    for (const key of keyPath) {
      nested[key] = isDef(nested[key]) ? nested[key] : Object.create(null)
      if (!isPlainObject(nested[key])) throwError(`Can't access ${id} – the path is invalid.`)
      nested = nested[key]
    }

    if (!nested[targetKey]) {
      nested[targetKey] = Array.isArray(value) ? Array.from(value) : value
      addedIds[id] = true
    } else warn(`Can't add inline translation for "${id}" to dictionary: key already has a value.`)
  }

  const createTranslationFn = ({ namespace = '', langKey }) => {
    if (namespace) namespace = namespace + '.'

    const translate = (id, ...values) => {
      const namespacedId = namespace + verifyId(id)
      try {
        return getMessage(dictionary, langKey, namespacedId, values)
      } catch (error) {
        if (!fallbackToDefault) throw error
        log(`No match for "${namespacedId}", using default locale ("${defaultLanguage}").`)
        return getMessage(dictionary, defaultLanguage, namespacedId, values)
      }
    }

    translate.forNamespace = nextNamespace => {
      return createTranslationFn({ namespace: namespace + nextNamespace, langKey })
    }

    translate.inline = id => (strings, ...values) => {
      if (langKey === defaultLanguage) {
        const namespacedId = namespace + verifyId(id)
        addToDictionary(namespacedId, strings)
      }
      return translate(id, ...values)
    }

    // Expose current namespace so debugging is easier when working with nested namespaces
    translate.namespace = namespace
    return translate
  }

  const getI18nState = langKey => ({
    language: langKey,
    t: createTranslationFn({ langKey }),
  })

  const state = getI18nState(initialLanguage)

  const actions = {
    setLanguage: langKey => (_, actions) => {
      return resolveLocale(langKey)
        .then(locale => {
          actions._updateState(langKey)
          return { language: langKey, locale }
        })
        .catch(() => throwError(`Can't set language to "${langKey}", no matching locale found.`))
    },
    _updateState: langKey => getI18nState(langKey),
  }

  return {
    state,
    actions,
    resolveInitialLanguage: () => resolveLocale(initialLanguage),
    getCurrentDictionary: () => replaceArrays(dictionary),
  }
}

export { createI18n }
