export const wait = time => new Promise(resolve => { setTimeout(resolve, time); });
export let errorMessage = '';
export const log = e => (errorMessage = e);
export const error = e => { throw new Error(e); };