/* eslint-disable import/prefer-default-export */
export function numberToShortLabel(number) {
  let n = number;
  if (n === Infinity) {
    return 'Infinity';
  } else if (n > 1e9) {
    n = Math.round(n / 1e8);
    return `${n / 10}B`;
  } else if (n > 1e5) {
    n = Math.round(n / 1e5);
    return `${n / 10}M`;
  } else if (n > 1e2) {
    n = Math.round(n / 1e2);
    return `${n / 10}K`;
  }

  return n;
}
