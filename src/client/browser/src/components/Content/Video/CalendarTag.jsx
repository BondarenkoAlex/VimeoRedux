/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Calendar as CalendarLabel } from '../../Svg/Calendar';
import { timeAgo } from '../../../utils/timeAgo';

function CalendarTag({ ago }) {
  const timeMoment = timeAgo(ago);
  return (
    <div>
      <CalendarLabel />
      <span>{timeMoment}</span>
    </div>
  );
}

CalendarTag.propTypes = {
  ago: PropTypes.string.isRequired,
};
CalendarTag.defaultProps = {};

export default CalendarTag;
