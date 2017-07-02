import React, {
  PropTypes,
} from 'react';
import CategoryItem from './CategoryItem';

function CategoryListItem(props) {
  const { list } = props;
  return (
    <div className="categories-container">
      {list.map(item => (
        <CategoryItem {...item}/>
      ))}
    </div>
  )
}

CategoryListItem.propTypes    = {};
CategoryListItem.defaultProps = {};

export default CategoryListItem;
