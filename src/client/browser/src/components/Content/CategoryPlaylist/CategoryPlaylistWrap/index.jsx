/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import style from './category-playlist-wrap.module.scss';

function CategoryPlaylistWrap(props) {
  return (
    <main className="site-main clearfix">
      <div className="container">
        <div className="wrap-container">
          <div className={style.categoryPlaylistWrap}>
            <h2 className={style.categoryPlaylistWrapHeader}>
              {props.title}
            </h2>
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
