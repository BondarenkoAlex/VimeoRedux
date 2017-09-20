/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

class CategoryListItem extends PureComponent {
  render() {
    const {
            itemsByKey,
            url,
          } = this.props;
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
}

CategoryListItem.propTypes = {
  itemsByKey: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
CategoryListItem.defaultProps = {};

export default CategoryListItem;

