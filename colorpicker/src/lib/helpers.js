import tinycolorpicker from './colorpicker'

if (!NodeList.prototype.forEach)
  NodeList.prototype.forEach = Array.prototype.forEach

export const create = node => document.createElement(node)
export const $ = s => document.querySelector(s)
export const $$ = s => document.querySelectorAll(s)
export const wait = t => new Promise(r => setTimeout(r, t))
export const debounce = (fn, wait) => {
  let timeout
  return function() {
    const args = arguments
    const later = () => {
      timeout = null
      fn.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
export const throttle = (fn, threshold) => {
  threshold || (threshold = 250)
  var last, deferTimer

  return function() {
    var now = +new Date(),
      args = arguments

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

const domainExtRegEx = new RegExp(/\.(?!\.)(?!.+\.).+/)
const domainExtMatch = domainExtRegEx.exec(window.location.host)
const ext = domainExtMatch && domainExtMatch[0].replace('.', '')
export { ext as domainExtension }

export const getQueryParams = url => {
  const queryString = url.split('?')[1]
  if (!queryString) return {}

  const paramStrings = queryString.split('&')
  const paramPairs = paramStrings.map(str => str.split('='))
  const queryParams = {}
  paramPairs.forEach(([key, val]) => (queryParams[key] = val))
  return queryParams
}

export const createColorpicker = img => {
  /* **** create neccessary markup **** */
  const previous = document.getElementById('colorPicker')
  if (previous) document.body.removeChild(previous)

  const container = create('div')
  container.id = 'colorPicker'
  const a = create('a')
  a.className = 'color'
  const inner = create('div')
  inner.className = 'colorInner'
  a.appendChild(inner)
  container.appendChild(a)

  const track = create('div')
  track.className = 'track'
  container.appendChild(track)

  const dropdown = create('ul')
  dropdown.className = 'dropdown'
  dropdown.appendChild(create('li'))
  container.appendChild(dropdown)

  const input = create('input')
  input.type = 'hidden'
  input.className = 'colorInput'
  container.appendChild(input)

  const footer = document.querySelector('footer')
  document.body.insertBefore(container, footer)
  /* ************ */

  const colorpicker = tinycolorpicker(container, { backgroundUrl: img })
  colorpicker.container = container

  return colorpicker
}
