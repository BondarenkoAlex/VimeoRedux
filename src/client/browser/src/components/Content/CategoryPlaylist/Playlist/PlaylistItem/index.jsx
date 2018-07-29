/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Favorite from '../../../../common/Favorite/index';
// import Author from '../../../../common/Author/index';
import AuthorContainer from '../../../../../containers/AuthorContainer';
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
    const idVideo = lastSubPath(uri);
    return (
      <div className={style.playlistItem}>
        <div className={style.playlistItemContent}>
          <PreviewVideo
            idVideo={idVideo}
            pictureUrl={pictureLink}
            duration={dur}
            path={path}
          />
          <TitleVideo title={name} />
          <div className={style.playlistItemSignature}>
            <AuthorContainer idUser={user} />
            <Favorite />
          </div>
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
