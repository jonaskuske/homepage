/* global h */

/**
 * Waits a given time, then resolves.
 * @param {number} time The time to wait in milliseconds.
 * @returns {Promise.<void>} Promise that resolves once the time has passed.
 */
export const wait = time => new Promise(resolve => setTimeout(resolve, time))

/**
 * Takes a max value and returns a random integer between 0 and that value.
 * @param {number} max The maximal value the returned random integer should have.
 * @returns {number} A random number between 0 and the given max limit.
 */
export const random = max => Math.floor(Math.random() * Math.floor(max))

/**
 * @type {Array.<Error>} Array containing all errors logged using helper log().
 */
export const errorMessages = []

/**
 * Pushes errors to helper "errorMessages" and logs to console.
 * @param {Error} e
 */
export const log = e => {
  errorMessages.push(e)
  console.error(e)
}

/**
 * Throws a new Error with a given error message.
 * @param {string} e The error message
 */
export const throwError = e => {
  throw new Error(e)
}

export const isDef = val => val != null
export const isEven = num => num % 2 === 0
export const isOdd = num => !isEven(num)
export const isBrowser = typeof window !== 'undefined'

export const rgbFromhex = hex => {
  /* see https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black */
  const dec = parseInt(hex.substring(1), 16) // convert #rrggbb to decimal
  const r = (dec >> 16) & 0xff // extract red
  const g = (dec >> 8) & 0xff // extract green
  const b = (dec >> 0) & 0xff // extract blue
  const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return { r, g, b, brightness }
}

/**
 * Returns object with key value pairs for parameters in a querystring;
 * strict: throws if no query string passed
 * @param {string} target
 * @param {{ strict?: boolean }} options
 */
export const getQueryParams = (target, { strict } = {}) => {
  const queryString = target.split('?')[1]
  if (!queryString) return strict ? throwError('No querystring found.') : {}

  const paramStrings = queryString.split('&')
  const paramPairs = paramStrings.map(str => str.split('='))
  const queryParams = {}
  paramPairs.forEach(([key, val]) => (queryParams[key] = val))
  return queryParams
}

/**
 * Checks whether one array is contained in another array.
 * @param {Array} baseArr The base array to search in.
 * @param {Array} queryArr The query array to look for inside the base array.
 * @returns {boolean} True if query array was found inside the base array
 */
export const containsArray = (baseArr, queryArr) => {
  return JSON.stringify(baseArr)
    .replace(/^\[|\]$/g, '')
    .includes(JSON.stringify(queryArr).replace(/^\[|\]$/g, ''))
}

export const createModal = ({
  callback,
  message = 'Are you sure?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  allowCancel = true,
}) => {
  const modal = document.createElement('div')
  const text = document.createElement('p')
  const button = document.createElement('button')
  const cancelButton = document.createElement('button')

  modal.id = 'the-modal'
  cancelButton.className = 'cancel-btn'

  modal.appendChild(text)
  modal.appendChild(button)
  if (allowCancel) modal.appendChild(cancelButton)

  text.textContent = message
  button.textContent = confirmText
  cancelButton.textContent = cancelText

  button.addEventListener('click', () => {
    callback && callback()
    document.body.classList.remove('no-overflow')
    document.body.removeChild(modal)
  })
  cancelButton.addEventListener('click', () => {
    document.body.classList.remove('no-overflow')
    document.body.removeChild(modal)
  })

  document.body.classList.add('no-overflow')
  document.body.insertBefore(modal, document.body.firstChild)
}

/**
 * Creates a function that only executes once every given interval.
 * @param {Function} fn The function to throttle.
 * @param {number} threshold The time in ms that has to pass between executions of fn.
 * @returns {Function} The throttled version of the passed function.
 */
export const throttle = (fn, threshold = 250) => {
  var last, deferTimer

  return function(...args) {
    var now = +new Date()

    if (last && now < last + threshold) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, threshold)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}

export const debounce = (fn, wait = 200) => {
  let timeout
  return function(...args) {
    const later = () => {
      timeout = null
      fn.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// find domain extension
const domainExtRegEx = new RegExp(/\.(?!\.)(?!.+\.).+/)
const domainExtMatch = domainExtRegEx.exec(window.location.host)
/**
 * The gTLD of the website, without the dot. (like com, org, de)
 */
const ext = domainExtMatch && domainExtMatch[0].replace('.', '')
export { ext as domainExtension }
