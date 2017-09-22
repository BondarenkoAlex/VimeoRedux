import React from 'react';
import PropTypes from 'prop-types';
import { View as ViewLabel } from '../../Svg/View';

function ViewTag({ number }) {
  return (
    <div>
      <ViewLabel />
      <span>{number}</span>
    </div>
  );
}

ViewTag.propTypes = {
  number: PropTypes.number.isRequired,
};
ViewTag.defaultProps = {};

export default ViewTag;
