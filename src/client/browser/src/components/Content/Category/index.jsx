import React from 'react';
import PropTypes from 'prop-types';
import CategoryPlaylistWrap from '../CategoryPlaylistWrap';
import CategoryListItem from './CategoryListItem';
import Loading from '../../Loading';

function Category({
  itemsByKey,
  title,
  url,
  isLoading,
}) {
  return (
    <CategoryPlaylistWrap title={title}>
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
