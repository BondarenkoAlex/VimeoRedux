/* jscs:disable maximumLineLength */
/* eslint-disable max-len, import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export function Heart({ fill, className }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path
        fill={fill}
        d="M8 15c0 0-8-4.1-8-10 0-2.2 1.8-4 4-4s4 1.8 4 4c0-2.2 1.8-4 4-4s4 1.8 4 4C16 10.9 8 15 8 15z"
      />
    </svg>
  );
}

Heart.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};
Heart.defaultProps = {
  fill: '#fff',
};
