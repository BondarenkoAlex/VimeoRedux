/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Calendar as CalendarLabel } from '../../../Svg/Calendar';
import { timeAgo } from '../../../../utils/timeAgo';

import style from './calendar-tag.module.scss';

function CalendarTag({ ago }) {
  const timeMoment = timeAgo(ago); // todo вынести и передвавать только вычисленное значение
  return (
    <div className={style.calendarTag}>
      <div className={style.calendarTagLabel}>
        <CalendarLabel />
      </div>
      <span className={style.calendarTagTitle}>{timeMoment}</span>
    </div>
  );
}

CalendarTag.propTypes = {
  ago: PropTypes.string.isRequired,
};
CalendarTag.defaultProps = {};

export default CalendarTag;
