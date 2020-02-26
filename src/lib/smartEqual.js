import deepEqual from 'fast-deep-equal';

const getType = (sth) => {
  return Object.prototype.toString.call(sth).slice(8, -1);
}

const deepObject = (obj) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const type = getType(obj[keys[i]]);
    if (type === 'Object' || type === 'Array') return true
  }
  return false
}

export const smartStrictEqual = (prev, next) => {
  // console.log(prev);
  // console.log(next);
  const prevType = getType(prev);
  // console.log('prevType: ', prevType);
  const nextType = getType(next);
  // console.log('nextType: ', nextType);
  if (prevType !== nextType) return Object.is(prev, next);
  // console.log('pass different types')
  if (prevType === 'Array') return deepEqual(prev, next);
  // console.log('pass array');
  if (prevType !== 'Object') return Object.is(prev, next);
  // console.log('pass other type')
  if (deepObject(prev) || deepObject(next)) return deepEqual(prev, next);
  // console.log('pass deep Object compare, shallow compare')
  return undefined;
} 