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
            <div className="responsive-wrapper-iframe">
              <div className="h_iframe">
                <img
                    alt="ratio"
                    className="ratio"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg=="
                />
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
