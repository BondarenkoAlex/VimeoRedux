/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tag as TagLabel } from '../../../Svg/Tag';
import Tag from './Tag/index';
import { EMPTY_ARRAY } from '../../../../constants/common';

import style from './tags-tag.module.scss';

function TagsTag({ tags }) {
  return (
    <div className={style.tagsTag}>
      <div className={style.tagsTagLabel}>
        <TagLabel />
      </div>
      {/*      {tags.reduce((acc, tag, i) => ([
        ...acc,
        <div className={style.tagsTagCommon} key={`${i}-tag`}>
          <Tag name={tag.name} />
        </div>,
        <span key={`${i}-span`} className={style.tagsTagCommon}>,&nbsp;</span>,
      ]), []).slice(0, -1)}*/}
      {tags.map((tag, i, arr) => (
        <div
          className={style.tagsTagCommon}
          key={i}
        >
          <Tag name={tag.name} />
          {(arr.length - 1 !== i) && <span className={style.tagsTagCommon}>,&nbsp;</span>}
        </div>
      ))}
    </div>
  );
}

TagsTag.propTypes = {
  tags: PropTypes.array,
};
TagsTag.defaultProps = {
  tags: EMPTY_ARRAY,
};

export default TagsTag;
