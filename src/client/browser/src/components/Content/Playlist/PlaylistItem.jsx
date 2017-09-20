/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Favorite from '../../common/Favorite';
import Author from '../../common/Author';
import TitleVideo from '../../common/TitleVideo';
import PreviewVideo from '../../common/PreviewVideo';
import { lastSubPath } from '../../../utils/helpers';
import { toTime } from '../../../utils/helpers';

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
          } = this.props;
    const dur = toTime(duration);
    const pictureLink = (pictures && pictures.sizes && pictures.sizes[3].link) || '';
    const userPictureLink = (user && user.pictures && user.pictures.sizes[1].link) || '';
    const idVideo = lastSubPath(uri);
    return (
      <div className="video-preview">
        <div className="preview">
          <PreviewVideo
            idVideo={idVideo}
            pictureUrl={pictureLink}
            duration={dur}
          />
        </div>
        <div className="title-container">
          <div className="title">
            <TitleVideo title={name} />
          </div>
          <ul className="author-favorite">
            <li className="author">
              <Author
                pictureUrl={userPictureLink}
                name={user.name}
              />
            </li>
            <li className="favorite">
              <Favorite />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

PlaylistItem.propTypes = {
  item: PropTypes.object.isRequired,
  //url: PropTypes.string.isRequired,
};
PlaylistItem.defaultProps = {};

export default PlaylistItem;
