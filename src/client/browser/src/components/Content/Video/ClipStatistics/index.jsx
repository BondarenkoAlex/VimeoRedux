/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TagList from '../TagList';
import CalendarTag from '../CalendarTag/index';
import ViewTag from '../ViewTag/ViewTag';
import CommentTag from '../CommentTag/CommentTag';
import FavoriteTag from '../FavoriteTag';
import { isEmpty } from '../../../../utils/check';

import style from './clip-statistics.module.scss';

function ClipStatistics(props) {
  const {
    createdTime,
    likesTotal,
    commentsTotal,
    tags,
  } = props;
  return (
    <div className={style.clipStatistics}>
      {createdTime && (
        <div className={style.clipStatisticsItem}>
          <CalendarTag ago={createdTime} />
        </div>)
      }
      {likesTotal && (
        <div className={style.clipStatisticsItem}>
          <ViewTag number={likesTotal} />
        </div>)
      }
      {commentsTotal && (
        <div className={style.clipStatisticsItem}>
          <CommentTag number={commentsTotal} />
        </div>)
      }
      <div className={style.clipStatisticsItem}>
        <FavoriteTag />
      </div>
      {!isEmpty(tags) && (
        <div className={style.clipStatisticsItem}>
          <TagList tags={tags} />
        </div>)
      }
    </div>
  );
}

ClipStatistics.propTypes = {
  createdTime: PropTypes.string.isRequired,
  likesTotal: PropTypes.number.isRequired,
  commentsTotal: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
};
ClipStatistics.defaultProps = {};

export default ClipStatistics;
