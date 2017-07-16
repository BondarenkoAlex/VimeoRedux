import React from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './PlaylistItem';

function PlaylistListItem(props) {
  const {
          items,
          //url,
        } = props;
  //const keys = Object.keys(items);
  return (
    <div className="playlist-container">
      {items.map(item => (
        <PlaylistItem
          playlist={item}
          key={item.resource_key}
        />
      ))}
    </div>
  );
}

PlaylistListItem.propTypes = {
  items: PropTypes.array.isRequired,
  //url: PropTypes.string.isRequired,
};
PlaylistListItem.defaultProps = {};

export default PlaylistListItem;
