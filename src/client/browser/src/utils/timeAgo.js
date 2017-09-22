/* eslint-disable import/prefer-default-export */
export function timeAgo(fullTimeStr) {
  const time = new Date(fullTimeStr).getTime();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  const elapsed = Date.now() - time;

  function getString(value, unit) {
    const val = Math.round(elapsed / value);
    const ago = (val === 1)
      ? ' ago'
      : 's ago';
    return `${val} ${unit}${ago}`;
  }

  if (elapsed < minute) {
    return getString(second, 'second');
  } else if (elapsed < hour) {
    return getString(minute, 'minute');
  } else if (elapsed < day) {
    return getString(hour, 'hour');
  } else if (elapsed < month) {
    return getString(day, 'day');
  } else if (elapsed < year) {
    return getString(month, 'month');
  }

  return getString(year, 'year');
}
