import { memoize } from 'redux-memoize';
const enabled = true;
export const ttl = 1000;
export const memoAC = (callback: Function) => memoize({ enabled, ttl },callback);