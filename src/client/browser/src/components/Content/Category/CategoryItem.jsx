import React, {
  PropTypes,
} from 'react';

function CategoryItem(props) {
  let {
        category: {
          name,
          pictures,
          icon,
        },
      } = props;
  debugger;
  return (
    <div className="category">
      <div className="ratio ratio16-9">
        <div className="ratio-content">
          <a href="#">
            <img
              className="category-preview"
              src={pictures.sizes[3].link}/>
            <div className="category-logo-title">
              <img
                className="category-logo"
                src={icon.sizes[0].link}/>
              <p className="category-title">
                {name}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
};
CategoryItem.defaultProps = {};

export default CategoryItem;
