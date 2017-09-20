import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import CategoryItem from './CategoryItem';

function CategoryListItem({
  itemsByKey,
  url,
}) {
  const keys = Object.keys(itemsByKey);
  return (
    <div className="categories-container">
      {keys.map(key => (
        <CategoryItem
          category={itemsByKey[key]}
          key={key}
          url={url}
        />))}
    </div>
  );
}

CategoryListItem.propTypes = {
  itemsByKey: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
CategoryListItem.defaultProps = {};

export default pure(CategoryListItem);
