/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Heart } from '../../Svg/Heart';
import Favorite from '../../common/Favorite';
import Author from '../../common/Author';
import TitleVideo from '../../common/TitleVideo';
import { Link } from 'react-router-dom';
import { toTime } from '../../../utils/helpers';

class PlaylistItem extends PureComponent {
  render() {
    const {
            item: {
              // uri,
              name,
              user,
              pictures,
              duration,
            },

            // url,
          } = this.props;
    // let subpath = uri.split('/').pop(); // last subpath
    // subpath = `/${subpath}`;
    // const path = (url.slice(-1) === '/')
    //   ? url.slice(0, -1)
    //   : url;
    const dur = toTime(duration);
    const pictureLink = (pictures && pictures.sizes && pictures.sizes[3].link) || '';
    const userPictureLink = (user && user.pictures && user.pictures.sizes[1].link) || '';
    return (
      <div className="video-preview">
        <div className="preview">
          <a href="#">
            <img
              className="preview"
              src={pictureLink}
            />
            <span className="duration">
              {dur}
            </span>
          </a>
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
