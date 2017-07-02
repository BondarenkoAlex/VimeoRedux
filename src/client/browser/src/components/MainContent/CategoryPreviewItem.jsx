import React, {
  PropTypes,
} from 'react';

function CategoryPreviewItem(props) {
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
          src={require('../../../../../images/category-logo/' + preview + '.jpg')}/>
        <div className="category-logo-title">
          <img
            className="category-logo"
            src={require('../../../../../images/category-logo/' + logo + '.jpg')}/>
          <p className="category-title">
            {title}
          </p>
        </div>
      </a>
    </div>
  );
}

CategoryPreviewItem.propTypes    = {};
CategoryPreviewItem.defaultProps = {};

export default CategoryPreviewItem;
