import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoryListItem(props) {
  const {
          items,
          url,
        } = props;
  const keys = Object.keys(items);
  return (
    <div className="categories-container">
      {keys.map(key => (
        <CategoryItem
          category={items[key]}
          key={key}
          url={url}
        />
      ))}
    </div>
  );
}

CategoryListItem.propTypes = {
  items: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
CategoryListItem.defaultProps = {};

export default CategoryListItem;
