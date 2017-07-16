import React from 'react';
import PropTypes from 'prop-types';
import CategoryPlaylistWrap from '../CategoryPlaylistWrap';

import CategoryListItem from './CategoryListItem';

function Category(props) {
  const {
          items,
          title,
          url,
        } = props;
  return (
    <CategoryPlaylistWrap title={title}>
      <CategoryListItem
        items={items}
        url={url}
      />
    </CategoryPlaylistWrap>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
Category.defaultProps = {};

export default Category;
