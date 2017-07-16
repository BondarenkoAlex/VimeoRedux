import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PlaylistItem(props) {
  const {
          playlist: {
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
  return (
    <div className="video-preview">
      <div className="preview">
        <a href="#">
          <img
            className="preview"
            src={pictures.sizes[3].link}
          />
          <span className="duration">
            {duration}
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
              {(user.pictures !== null) &&
              <img src={user.pictures.sizes[1].link}/>
              }
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
  playlist: PropTypes.object.isRequired,
  //url: PropTypes.string.isRequired,
};
PlaylistItem.defaultProps = {};

export default PlaylistItem;
