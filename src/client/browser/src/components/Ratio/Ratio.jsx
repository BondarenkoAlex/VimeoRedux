import React from 'react';
import PropTypes from 'prop-types';

import style from './ratio.module.scss';

function Ratio({ ratio, children }) {
  let className;
  switch (ratio) {
    case '2:1': {
      className = style.ratioRatio21;
      break;
    }

    case '4:3': {
      className = style.ratioRatio43;
      break;
    }

    case '16:9': {
      className = style.ratioRatio169;
      break;
    }

    default:
      className = style.ratio;
  }

  return (
    <div className={className}>
      <div className={style.ratioContent}>
        {children}
      </div>
    </div>
  );
}

Ratio.propTypes = {
  ratio: PropTypes.oneOf(['2:1', '4:3', '16:9']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
Ratio.defaultProps = {};

export default Ratio;
