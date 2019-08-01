import { h } from 'hyperapp'

const isDef = object => object != undefined
const toString = object => Object.prototype.toString.call(object)
const isString = string => 'string' === typeof string
const isFunction = object => 'function' === typeof object
const isArray = array => Array.isArray(array)
const isPlainObject = object => '[object Object]' === toString(object)
const isPromise = object => '[object Promise]' === toString(object)
const isModule = object => '[object Module]' === toString(object)

const replaceArrays = object => {
  return Object.entries(object).reduce((obj, [key, value]) => {
    if (isArray(value)) obj[key] = value.length === 1 ? value[0] : Array.from(value)
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
  DEBUG = false,
}) => {
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
    if (isString(id)) return id
    return throwError(
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

    return strings.reduce((translated, substring, index) => {
      const value = isString(values[index]) ? values[index] : ''
      return translated + substring + value
    }, '')
  }

  const getTranslation = (dictionary, langKey, id, values) => {
    let translation = dictionary[langKey]

    for (const key of id.split('.')) {
      if (isPlainObject(translation)) translation = translation[key]
      else throwError(`Can't access "${id}" in locale "${langKey}" – the path is invalid.`)
    }

    if (isString(translation)) translation = [translation]
    if (!isArray(translation)) throwError(`"${id}" not found in locale "${langKey}".`)

    translation = interpolate(translation, values, id)
    return linebreakRegex.test(translation) ? insertLinebreaks(translation) : translation
  }

  const dictionary = locales

  const resolveLocale = langKey => {
    if (isPlainObject(dictionary[langKey])) return dictionary[langKey]

    if (isFunction(dictionary[langKey])) {
      const returnObject = dictionary[langKey]()
      if (isPlainObject(returnObject)) return (dictionary[langKey] = returnObject)

      if (isPromise(returnObject)) {
        return returnObject.then(result => {
          if (isModule(result) && result.__esModule) result = result.default
          if (isPlainObject(result)) return (dictionary[langKey] = result)
          else throwError(`Couldn't resolve locale ${langKey}.`)
        })
      }
    }

    throwError(`Couldn't resolve locale "${langKey}".`)
  }

  const addedIds = Object.create(null)
  const addToDictionary = (id, value) => {
    if (addedIds[id]) return

    let keyPath = id.split('.'), targetKey = keyPath.pop() // prettier-ignore
    let nested = dictionary[defaultLanguage]

    for (const key of keyPath) {
      nested[key] = isDef(nested[key]) ? nested[key] : Object.create(null)
      if (!isPlainObject(nested[key])) throwError(`Can't access ${id} – the path is invalid.`)
      nested = nested[key]
    }

    if (!nested[targetKey]) {
      nested[targetKey] = value
      addedIds[id] = true
    } else warn(`Can't add inline translation for "${id}" to dictionary: key already has a value.`)
  }

  const createTranslationFn = (langKey, namespace = '') => {
    if (namespace) namespace = namespace + '.'

    const translate = (id, ...values) => {
      const namespacedId = namespace + verifyId(id)
      try {
        return getTranslation(dictionary, langKey, namespacedId, values)
      } catch (error) {
        if (!fallbackToDefault) throw error
        log(`No match for "${namespacedId}", using default locale ("${defaultLanguage}").`)
        return getTranslation(dictionary, defaultLanguage, namespacedId, values)
      }
    }

    translate.forNamespace = addNamespace => createTranslationFn(langKey, namespace + addNamespace)

    translate.inline = id => (strings, ...values) => {
      const namespacedId = namespace + verifyId(id)
      if (!(isArray(strings) && isArray(strings.raw))) {
        throwError(`t.inline() must be used as a tagged template. (key: "${namespacedId}")`)
      }

      if (langKey === defaultLanguage) addToDictionary(namespacedId, strings)
      return translate(id, ...values)
    }

    // Expose current namespace so debugging is easier when working with nested namespaces
    translate.namespace = namespace
    return translate
  }

  const getI18nState = langKey => ({
    language: langKey,
    t: createTranslationFn(langKey),
  })

  const state = getI18nState(initialLanguage)

  const actions = {
    setLanguage: language => (_, actions) => {
      return Promise.resolve(resolveLocale(language))
        .then(locale => {
          actions._updateState(language)
          return { language, locale }
        })
        .catch(() => throwError(`Can't set language to "${language}", no matching locale found.`))
    },
    _updateState: langKey => getI18nState(langKey),
  }

  return {
    state,
    actions,
    resolveInitialLanguage: () => Promise.resolve(resolveLocale(initialLanguage)),
    getCurrentDictionary: () => replaceArrays(dictionary),
  }
}

export { createI18n }
