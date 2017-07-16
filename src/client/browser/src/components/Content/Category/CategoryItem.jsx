import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const {
          category: {
            uri,
            name,
            pictures,
            icon,
          },
          url,
        } = props;
  let subpath = uri.split('/').pop(); // last subpath
  subpath = `/${subpath}`;
  const path = (url.slice(-1) === '/')
    ? url.slice(0, -1)
    : url;
  //url.charAt(0) === '.'
  //{url.slice(1)}
  return (
    <div className="category">
      <div className="ratio ratio16-9">
        <div className="ratio-content">
          <Link to={`${path}${subpath}`}>
            <img
              alt={name}
              className="category-preview"
              src={pictures.sizes[3].link}
            />
            <div className="category-logo-title">
              {(icon !== undefined) &&
              <img
                alt={name}
                className="category-logo"
                src={icon.sizes[0].link}
              />
              }
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
  url: PropTypes.string.isRequired,
};
CategoryItem.defaultProps = {};

export default CategoryItem;
