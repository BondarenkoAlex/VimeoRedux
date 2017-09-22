import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryPlaylistWrap from '../CategoryPlaylistWrap';
import CategoryListItem from './CategoryListItem';
import Loading from '../../../Loading';

function Category({
                    itemsByKey,
                    title,
                    url,
                    isLoading, onClick,
                  }) {
  return (
    <CategoryPlaylistWrap title={title}>
      <button onClick={onClick}>Click</button>
      <Link
        to={{
          pathname: '/animation/2d',
          search: '?showby=10&duration=short&period=7',
        }}
      >
        Link
      </Link>
      {{
        true: (
          <Loading />),
        false: (
          <CategoryListItem
            itemsByKey={itemsByKey}
            url={url}
          />),
      }[isLoading]}
    </CategoryPlaylistWrap>);
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  itemsByKey: PropTypes.object,
  isLoading: PropTypes.bool,
};
Category.defaultProps = {
  isFetching: true,
  itemsByKey: {},
};

export default Category;
