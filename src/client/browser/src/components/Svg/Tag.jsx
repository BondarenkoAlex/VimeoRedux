/* jscs:disable maximumLineLength */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export function Tag() {
  return (
    <svg viewBox="0 0 16 16">
      <circle
        fill="#5379B7"
        cx="10.5"
        cy="5.5"
        r="1.5"
      />
      <path
        fill="#5379B7"
        d="M8 1L0 9v1l6 6h1l8-8V1H8zM14 7.5L6.5 15 1 9.5 8.5 2H14V7.5z"
      />
    </svg>
  );
}

Tag.propTypes = {};
Tag.defaultProps = {};
