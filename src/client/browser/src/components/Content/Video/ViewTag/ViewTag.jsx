import React from 'react';
import PropTypes from 'prop-types';
import { addSeparatorToNumber } from '../../../../utils/addSeparatorToNumber';
import { View as ViewLabel } from '../../../Svg/View';

import style from './view-tag.module.scss';

function ViewTag({ number }) {
  const total = addSeparatorToNumber(number);
  return (
    <div className={style.viewTag}>
      <div className={style.viewTagLabel}>
        <ViewLabel />
      </div>
      <span className={style.viewTagTitle}>{total}</span>
    </div>
  );
}

ViewTag.propTypes = {
  number: PropTypes.number.isRequired,
};
ViewTag.defaultProps = {};

export default ViewTag;
