/* global h */
export const wait = time => new Promise(resolve => { setTimeout(resolve, time); });
export const errorMessages = [];
export const log = e => {
  errorMessages.push(e);
  console.error(e);
};
export const error = e => { throw new Error(e); };
export const parseText = str => {
  const children = str.split(/(?=<a.+<\/a>)|<\/a>|(?=<br)|r\s?\/>/);

  const parsed = children.map(el => {
    if (el.indexOf('<b') === 0) return h('br');
    if (el.indexOf('<a ') !== 0) return el;

    const attributes = {};
    const text = el.split('>')[1] || '';

    const inner = el.replace(/<a\s|>.+/g, '');
    const pairs = inner.split(' ');
    pairs.forEach(pair => {
      const [key, val = true] = pair.split('=');
      attributes[key] = JSON.parse(val);
    });

    return h('a', attributes, text);
  });

  return parsed;
};