import React from 'react';
import PropTypes from 'prop-types';

function CategoryPlaylistWrap(props) {
  return (
    <main className="site-main clearfix">
      <div className="container">
        <div className="wrap-container">
          <div className="categories-title">
            <h2>{props.title}</h2>
          </div>
        </div>
        {props.children}
      </div>
    </main>
  );
}

CategoryPlaylistWrap.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
CategoryPlaylistWrap.defaultProps = {};

export default CategoryPlaylistWrap;