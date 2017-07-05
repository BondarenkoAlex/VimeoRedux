import React, {
    PropTypes,
} from 'react';

// заменить на контейнеры т.к. работы будет идти через него
// можно сделать через плеер самостоятельный, через апи
function Player(props) {
  return (
      <section className="player clearfix">
        <div className="container">
          <div className="wrap-container">
            <div className="responsive-wrapper-iframe ratio ratio16-9">
              <div className="ratio-content">
                <iframe
                    src="https://player.vimeo.com/video/63804657?badge=0&amp;autopause=0&amp;player_id=0"
                    width="1280"
                    height="720"
                    frameborder="0"
                    title="BOLES"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

Player.propTypes    = {};
Player.defaultProps = {};

export default Player;
