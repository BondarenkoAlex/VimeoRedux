/* eslint-disable import/prefer-default-export */
export function addSeparatorToNumber(number, separator) {
  const isInteger = String(parseInt(number, 10)) === String(number);
  if (!isInteger) {
    throw new Error('The "number" is not numeric`s type"');
  }

  const sep = (separator === undefined)
    ? ','
    : separator;

  return number
    .toString()
    .split('')
    .reverse()
    .join('')
    .match(/(.{1,3})/g)
    .join(sep)
    .split('')
    .reverse()
    .join('');
}
