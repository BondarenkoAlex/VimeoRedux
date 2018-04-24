/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Favorite from '../../../../common/Favorite/index';
import Author from '../../../../common/Author/index';
import TitleVideo from '../../../../common/TitleVideo/index';
import PreviewVideo from '../../../../common/PreviewVideo/index';
import { lastSubPath, toTime } from '../../../../../utils/helpers';


import style from './playlist-item.module.scss';

class PlaylistItem extends PureComponent {
  render() {
    const {
      item: {
        uri,
        name,
        user,
        pictures,
        duration,
      },
      uri: path,
    } = this.props;
    const dur = toTime(duration);
    const pictureLink = (pictures && pictures.sizes && pictures.sizes[3].link) || '';
    const userPictureLink = (user && user.pictures && user.pictures.sizes[1].link) || '';
    const idVideo = lastSubPath(uri);
    return (
      <div className={style.playlistItem}>
        <PreviewVideo
          idVideo={idVideo}
          pictureUrl={pictureLink}
          duration={dur}
          path={path}
        />
        <div>
          <TitleVideo title={name} />
          <Author
            src={userPictureLink}
            name={user.name}
          />
          <Favorite />
        </div>
      </div>
    );
  }
}

PlaylistItem.propTypes = {
  item: PropTypes.object.isRequired,
  uri: PropTypes.string.isRequired,
};
PlaylistItem.defaultProps = {};

export default PlaylistItem;
