/* jscs:disable maximumLineLength */
/* eslint-disable max-len, import/prefer-default-export */
import React from 'react';

export function Calendar() {
  return (
    <svg viewBox="0 0 16 16">
      <path
        fill="#5379B7"
        d="M14 2h-1v3h-3V2H6v3H3V2H2C1.4 2 1 2.4 1 3v11c0 0.6 0.4 1 1 1h12c0.6 0 1-0.4 1-1V3C15 2.4 14.6 2 14 2zM14 14H2V6h12V14z"
      />
      <rect
        x="4"
        y="1"
        fill="#5379B7"
        width="1"
        height="3"
      />
      <rect
        x="11"
        y="1"
        fill="#5379B7"
        width="1"
        height="3"
      />
    </svg>
  );
}

Calendar.propTypes = {};
Calendar.defaultProps = {};
