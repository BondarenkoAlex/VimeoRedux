import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Img from '../../common/Img';

function RelatedVideo(props) {
  return (
    <div>
      <div className="preview-wrapper">
        <div className="preview">
          <Link to="#">
            <Img
              src="https://i.vimeocdn.com/video/188703261_640x360.jpg?r=pad"
              alt="dfdsfds"
            />
          </Link>
        </div>
      </div>
      <div className="title-container">
        <div className="title">
          <Link to="#">
            RUIN AND ROSE Whistler ParkEdit
          </Link>
        </div>
        <div className="author">
          <Link to="#">
            Spela Cadez
          </Link>
        </div>
      </div>
    </div>
  );
}

RelatedVideo.propTypes = {};
RelatedVideo.defaultProps = {};

export default RelatedVideo;
