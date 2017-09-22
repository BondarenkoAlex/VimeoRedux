/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { addSeparatorToNumber } from '../../../utils/addSeparatorToNumber';
import { Comment as CommentLabel } from '../../Svg/Comment';

function CommentTag({ number }) {
  const total = addSeparatorToNumber(number);
  return (
    <div>
      <CommentLabel />
      <span>{total}</span>
    </div>
  );
}

CommentTag.propTypes = {
  number: PropTypes.number.isRequired,
};
CommentTag.defaultProps = {};

export default CommentTag;
