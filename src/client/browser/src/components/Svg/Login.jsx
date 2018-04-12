/* jscs:disable maximumLineLength */
/* eslint-disable max-len, import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';

export function Login({ fill, className }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill={fill}
        d="M10 10.6V9.3c1.2-0.9 2-2.5 2-4.3 0-2.8-1.8-5-4-5S4 2.2 4 5c0 1.8 0.8 3.4 2 4.3v1.3C2.6 11 0 12.4 0 14v2h16v-2C16 12.4 13.4 11 10 10.6z"
      />
    </svg>
  );
}

Login.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};
Login.defaultProps = {
  fill: '#fff',
  className: null,
};

export default Login;
