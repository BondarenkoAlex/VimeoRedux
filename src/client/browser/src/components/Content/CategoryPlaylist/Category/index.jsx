import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CategoryPlaylistWrap from '../CategoryPlaylistWrap/index';
import CategoryListItem from './CategoryListItem/index';
import Loading from '../../../Loading';

function Category({
  itemsByKey,
  title,
  url,
  isLoading,
}) {
  return (
    <CategoryPlaylistWrap title={title}>
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
