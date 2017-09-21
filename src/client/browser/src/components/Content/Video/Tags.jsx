/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tag as TagLabel } from '../../Svg/Tag';
import Tag from './Tag';
import { EMPTY_ARRAY } from '../../../constants/common';

function Tags({ tags }) {
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

Tags.propTypes = {
  tags: PropTypes.array,
};
Tags.defaultProps = {
  tags: EMPTY_ARRAY,
};

export default Tags;
