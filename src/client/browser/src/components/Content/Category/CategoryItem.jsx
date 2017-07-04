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
      <a href="#">
        <img
          className="category-preview"
          src={pictures.sizes[2].link}/>
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
  );
}

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
};
CategoryItem.defaultProps = {};

export default CategoryItem;
