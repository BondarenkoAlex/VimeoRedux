import React, {
  PropTypes,
} from 'react';
import CategoryItem from './CategoryItem';

function CategoryListItem(props) {
  const { categories } = props;
  const keys = Object.keys(categories.items);
  return (
    <div className="categories-container">
      {keys.map(key => (
        <CategoryItem
          category={categories.items[key]}
          key={key}
        />
      ))}
    </div>
  );
}

CategoryListItem.propTypes = {
  categories: PropTypes.object.isRequired,
};
CategoryListItem.defaultProps = {};

export default CategoryListItem;
