/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tag as TagLabel } from '../../Svg/Tag';
import Tag from './Tag';
import { EMPTY_ARRAY } from '../../../constants/common';

function TagsTag({ tags }) {
  return (
    <div>
      <TagLabel />
      <ul>
        {tags.map(tag => (
          <li key={tag.resource_key}>
            <Tag name={tag.name} />
          </li>
        ))}
      </ul>
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
