import React, {
  PropTypes,
} from 'react';

function CategoryItem(props) {
  let {
        title,
        logo,
        preview,
      } = props;
  return (
    <div className="category">
      <a href="#">
        <img
          className="category-preview"
          src={require('../../../../../../images/' + preview + '.png')}/>
        <div className="category-logo-title">
          <img
            className="category-logo"
            src={require('../../../../../../images/category-logo/' + logo + '.png')}/>
          <p className="category-title">
            {title}
          </p>
        </div>
      </a>
    </div>
  );
}

CategoryItem.propTypes    = {};
CategoryItem.defaultProps = {};

export default CategoryItem;
