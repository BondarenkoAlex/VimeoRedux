import React, {
  PropTypes,
} from 'react';
import CategoryPreviewItem from './CategoryPreviewItem';

function CategoryPreviewListItem(props) {
  const { list } = props;
  return list.map(item => (
    <CategoryPreviewItem {...item}/>
  ));
}

CategoryPreviewListItem.propTypes    = {};
CategoryPreviewListItem.defaultProps = {};

export default CategoryPreviewListItem;
