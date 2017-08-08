import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import toTime from '../../../utils/toTime';

function PlaylistItem(props) {
  const {
          item: {
            //uri,
            name,
            user,
            pictures,
            duration,
          },
          //url,
        } = props;
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
          <a href="#">
            {name}
          </a>
        </div>
        <ul className="author-favorite">
          <li className="author">
            <a href="#">
              <img src={userPictureLink}/>
              <span>
                {user.name}
              </span>
            </a>
          </li>
          <li className="favorite">
            <a href="#">
              <img
                className="preview"
                src={require('../../../../../../images/favorite-small.png')}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

PlaylistItem.propTypes = {
  item: PropTypes.object.isRequired,
  //url: PropTypes.string.isRequired,
};
PlaylistItem.defaultProps = {};

export default PlaylistItem;
