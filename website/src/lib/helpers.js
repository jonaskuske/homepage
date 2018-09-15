/* global h */

/**
 * Waits a given time, then resolves.
 * @param {number} time The time to wait in milliseconds.
 * @returns {Promise.<void>} Promise that resolves once the time has passed.
 */
export const wait = time => new Promise(resolve => { setTimeout(resolve, time); });

/**
 * Takes a max value and returns a random integer between 0 and that value.
 * @param {number} max The maximal value the returned random integer should have.
 * @returns {number} A random number between 0 and the given max limit.
 */
export const random = max => Math.floor(Math.random() * Math.floor(max));

/**
 * @type {Array.<Error>} Array containing all errors logged using helper log().
 */
export const errorMessages = [];

/**
 * Pushes errors to helper "errorMessages" and logs to console.
 * @param {Error} e
 */
export const log = e => {
  errorMessages.push(e);
  console.error(e);
};

/**
 * Throws a new Error with a given error message.
 * @param {string} e The error message
 */
export const error = e => { throw new Error(e); };


/**
 * Transforms simple HTML strings to arrays, where inlined linebreaks and links
 * in the form of <a>...</a> and <br/> (needs closing slash!) are replaced by VNodes returned from h().
 * @param {string} html HTML string, may contain <br/> and <a> tags.
 * @returns {Array.<string|{children: Array.<string>, name: string, props: Object}>} Array containing strings and VNode objects.
 */
export const parseText = html => {
  const children = html.split(/(?=<a.+<\/a>)|<\/a>|(?=<br)|r\s?\/>/);

  const parsed = children.map(el => {
    if (el.indexOf('<b') === 0) return h('br');
    if (el.indexOf('<a ') !== 0) return el;

    const attributes = {};
    const text = el.split('>')[1] || '';

    const inner = el.replace(/<a\s|>.+/g, '');
    const pairs = inner.split(' ');
    pairs.forEach(pair => {
      const [key, val = 'true'] = pair.split(/=(.+)/);
      attributes[key] = JSON.parse(val);
    });

    return h('a', attributes, text);
  });

  return parsed;
};

/**
 * Checks whether one array is contained in another array.
 * @param {Array} baseArr The base array to search in.
 * @param {Array} queryArr The query array to look for inside the base array.
 * @returns {boolean} True if query array was found inside the base array
 */
export const containsArray = (baseArr, queryArr) => {
  return JSON.stringify(baseArr)
    .replace(/^\[|\]$/g, '')
    .includes(JSON.stringify(queryArr)
      .replace(/^\[|\]$/g, '')
    );
};

export const createModal = ({ callback, message = 'Are you sure?', confirmText = 'Confirm', cancelText = 'Cancel', allowCancel = true }) => {

  const modal = document.createElement('div');
  const text = document.createElement('p');
  const button = document.createElement('button');
  const cancelButton = document.createElement('button');

  modal.id = 'the-modal';
  cancelButton.className = 'cancel-btn';

  modal.appendChild(text);
  modal.appendChild(button);
  if (allowCancel) modal.appendChild(cancelButton);

  text.textContent = message;
  button.textContent = confirmText;
  cancelButton.textContent = cancelText;

  button.addEventListener('click', () => {
    callback && callback();
    document.body.classList.remove('no-overflow');
    document.body.removeChild(modal);
  });
  cancelButton.addEventListener('click', () => {
    document.body.classList.remove('no-overflow');
    document.body.removeChild(modal);
  });

  document.body.classList.add('no-overflow');
  document.body.insertBefore(modal, document.body.firstChild);
};
/**
 * Creates a function that only executes once every given interval.
 * @param {Function} fn The function to throttle.
 * @param {number} threshold The time in ms that has to pass between executions of fn.
 * @returns {Function} The throttled version of the passed function.
 */
export const throttle = (fn, threshold) => {
  threshold || (threshold = 250);
  var last, deferTimer;

  return function () {
    var now = +new Date, args = arguments;

    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(this, args);
    }
  };
};


// find domain extension
const domainExtRegEx = new RegExp(/\.(?!\.)(?!.+\.).+/);
const domainExtMatch = domainExtRegEx.exec(window.location.host);
/**
 * The gTLD of the website, without the dot. (like com, org, de)
 */
const ext = domainExtMatch && domainExtMatch[0].replace('.', '');
export { ext as domainExtension };

/**
 * Takes in a function and returns a function that calls the passed function, then blurs focus of the event target that triggered it.
 * @param {function} fn The function to be called before bluring focus.
 */
export const withBlur = fn => e => { const res = fn(e); e.currentTarget.blur(); return res; };