import React from 'react';
import PropTypes from 'prop-types';
import CategoryPlaylistWrap from '../CategoryPlaylistWrap';

import PlaylistListItem from './PlaylistListItem';

function Playlist(props) {
  const {
          items,
          title,
          //url,
        } = props;
  return (
    <CategoryPlaylistWrap title={title}>
      <PlaylistListItem
        items={items}

      />
    </CategoryPlaylistWrap>
  );
}

Playlist.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  //url: PropTypes.string.isRequired,
};
Playlist.defaultProps = {};

export default Playlist;
