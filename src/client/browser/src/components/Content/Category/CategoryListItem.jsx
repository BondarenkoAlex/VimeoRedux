import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoryListItem(props) {
  const {
          categories,
          url,
        } = props;
  const keys = Object.keys(categories);
  return (
    <div className="categories-container">
      {keys.map(key => (
        <CategoryItem
          category={categories[key]}
          key={key}
        />
      ))}
    </div>
  );
}

CategoryListItem.propTypes = {
  categories: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
CategoryListItem.defaultProps = {};

export default CategoryListItem;
