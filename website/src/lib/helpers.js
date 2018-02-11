export const wait = time => new Promise(resolve => { setTimeout(resolve, time); });
export const errorMessages = [];
export const log = e => {
  errorMessages.push(e);
  console.error(e);
};
export const error = e => { throw new Error(e); };