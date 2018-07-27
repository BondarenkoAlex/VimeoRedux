/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { addSeparatorToNumber } from '../../../../utils/addSeparatorToNumber';
import { Comment as CommentLabel } from '../../../Svg/Comment';

import style from './comment-tag.module.scss';

function CommentTag({ number }) {
  const total = addSeparatorToNumber(number); // todo
  return (
    <div className={style.commentTag}>
      <div className={style.commentTagLabel}>
        <CommentLabel />
      </div>
      <span className={style.commentTagTitle}>{total}</span>
    </div>
  );
}

CommentTag.propTypes = {
  number: PropTypes.number.isRequired,
};
CommentTag.defaultProps = {};

export default CommentTag;
