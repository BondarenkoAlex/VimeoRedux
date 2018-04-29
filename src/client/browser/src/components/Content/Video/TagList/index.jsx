/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tag as TagLabel } from '../../../Svg/Tag';
import Tag from './Tag/index';
import { EMPTY_ARRAY } from '../../../../constants/common';

import style from './tag-list.module.scss';

function TagList({ tags }) {
  return (
    <div className={style.tagList}>
      <div className={style.tagListLabel}>
        <TagLabel />
      </div>
      {tags.map((tag, i, arr) => (
        <div
          className={style.tagListCommon}
          key={i}
        >
          <Tag name={tag.name} />
          {(arr.length - 1 !== i) && <span className={style.tagListCommon}>,&nbsp;</span>}
        </div>
      ))}
    </div>
  );
}

TagList.propTypes = {
  tags: PropTypes.array,
};
TagList.defaultProps = {
  tags: EMPTY_ARRAY,
};

export default TagList;
