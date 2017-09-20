/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlaylistItem from './PlaylistItem';

class PlaylistListItem extends PureComponent {
  render() {
    const {
            items,
            //url,
          } = this.props;
    // const keys = Object.keys(items);
    return (
      <div className="playlist-container">
        {items.map(item => (
          <PlaylistItem
            item={item}
            key={item.resource_key}
          />
        ))}
      </div>
    );
  }
}

PlaylistListItem.propTypes = {
  items: PropTypes.array.isRequired,
  //url: PropTypes.string.isRequired,
};
PlaylistListItem.defaultProps = {};

export default PlaylistListItem;

