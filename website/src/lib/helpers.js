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