import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CategoryItem(props) {
  const {
        category: {
          uri,
          name,
          pictures,
          icon,
        },
      } = props;
  const subpath = uri.split('/').pop(); // last subpath
  debugger;
  return (
    <div className="category">
      <div className="ratio ratio16-9">
        <div className="ratio-content">
          <Link to={`${subpath}`}>
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
          </Link>
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
