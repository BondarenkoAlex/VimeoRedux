/* eslint-disable prefer-template, react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { lastSubPath } from '../../../utils/helpers';

class CategoryItem extends PureComponent {
  render() {
    const {
            category,
            url,
          } = this.props;
    const {
            uri,
            name,
            pictures,
            icon,
          } = category;
    const subpath = '/' + lastSubPath(uri);
    const path = (url.slice(-1) === '/')
      ? url.slice(0, -1)
      : url;
    const pictureLink = (pictures && pictures.sizes && pictures.sizes[3].link) || '';
    const iconLink = (icon && icon.sizes && icon.sizes[0].link) || null;
    return (
      <div className="category">
        <div className="ratio ratio16-9">
          <div className="ratio-content">
            <Link to={`${path}${subpath}`}>
              <img
                alt={name}
                className="category-preview"
                src={pictureLink}
              />
              <div className="category-logo-title">
                {(iconLink !== null) &&
                <img
                  alt={name}
                  className="category-logo"
                  src={iconLink}
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
}

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
CategoryItem.defaultProps = {};

export default CategoryItem;

