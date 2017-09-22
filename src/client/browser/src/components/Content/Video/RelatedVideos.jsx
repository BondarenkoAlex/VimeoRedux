import React from 'react';
import PropTypes from 'prop-types';
import RelatedVideo from './RelatedVideo';

function RelatedVideos(props) {
  return (
    <aside className="related">
      <div className="wrap-container"><h3>Related video</h3></div>
      <ul>
        {[1, 2, 3].map((video, i) => (
          <li key={`wer-${i}`} className="clearfix">
            <RelatedVideo />
          </li>
        ))}
        {/*        <li className="clearfix">
          <div className="preview-wrapper">
            <div className="preview">
              <a href="#"><img src="/vm/src/images/playlist/596175114_640x427.jpg" /></a>
            </div>
          </div>
          <div className="title-container">
            <div className="title"><a href="#">RUIN AND ROSE Whistler ParkEdit</a></div>
            <div className="author"><a href="#">Spela Cadez</a></div>
          </div>
        </li>
        <li className="clearfix">
          <div className="preview-wrapper">
            <div className="preview">
              <a href="#"><img src="/vm/src/images/playlist/602555565_640x360.jpg" /></a>
            </div>
          </div>
          <div className="title-container">
            <div className="title"><a href="#">By The Name of Boston</a></div>
            <div className="author"><a href="#">Grant Kolton</a></div>
          </div>
        </li>
        <li className="clearfix">
          <div className="preview-wrapper">
            <div className="preview">
              <a href="#"><img src="/vm/src/images/playlist/604090110_640x360.jpg" /></a>
            </div>
          </div>
          <div className="title-container">
            <div className="title"><a href="#">Richard Marx - I Will be Right here Waiting
              for You</a></div>
            <div className="author"><a href="#">Zumbakamera</a></div>
          </div>
        </li>
        <li className="clearfix">
          <div className="preview-wrapper">
            <div className="preview">
              <a href="#"><img src="/vm/src/images/playlist/606733956_640x270.jpg" /></a>
            </div>
          </div>
          <div className="title-container">
            <div className="title"><a href="#">Makeba / Jain</a></div>
            <div className="author"><a href="#">Greg&Lio</a></div>
          </div>
        </li>
        <li className="clearfix">
          <div className="preview-wrapper">
            <div className="preview">
              <a href="#"><img src="/vm/src/images/playlist/616252871_640x360.jpg" /></a>
            </div>
          </div>
          <div className="title-container">
            <div className="title"><a href="#">Sharks’ Teeth - Lost In The Cosmos</a></div>
            <div className="author"><a href="#">Derek Beck</a></div>
          </div>
        </li>
        <li className="clearfix">
          <div className="preview-wrapper">
            <div className="preview">
              <a href="#"><img src="/vm/src/images/playlist/623113911_640x270.jpg" /></a>
            </div>
          </div>
          <div className="title-container">
            <div className="title"><a href="#">The Books – ALEATORIC</a></div>
            <div className="author"><a href="#">Yours Truly</a></div>
          </div>
        </li> */}
      </ul>
    </aside>
  );
}

RelatedVideos.propTypes = {};
RelatedVideos.defaultProps = {};

export default RelatedVideos;
