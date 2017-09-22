/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TagsTag from './TagsTag';
import CalendarTag from './CalendarTag';
import ViewTag from './ViewTag';
import CommentTag from './CommentTag';
import Favorite from '../../common/Favorite';

function ClipStatistics(props) {
  const {
          createdTime,
          likesTotal,
          commentsTotal,
          tags,
        } = props;
  return (
    <ul className="clip-statistics clearfix">
      <li className="date">
        <CalendarTag ago={createdTime} />
      </li>
      <li className="view">
        <ViewTag number={likesTotal} />
      </li>
      <li className="comment">
        <CommentTag number={commentsTotal} />
      </li>
      <li className="tags">
        <TagsTag
          tags={tags}
        />
      </li>
      <li className="favorite">
        <Favorite />
      </li>
    </ul>
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
