/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CategoryPlaylistWrap from '../CategoryPlaylistWrap/index';
import PlaylistListItem from './PlaylistListItem/index';
import Loading from '../../../Loading';

function Playlist(props) {
  const {
    items,
    title,
    isLoading,
    uri,
  } = props;
  return (
    <CategoryPlaylistWrap title={title}>
      {isLoading
        ? (
          <Loading />)
        : (
          <PlaylistListItem
            items={items}
            uri={uri}
          />
        )
      }
    </CategoryPlaylistWrap>
  );
}

Playlist.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  uri: PropTypes.string.isRequired,
};
Playlist.defaultProps = {};

export default Playlist;
