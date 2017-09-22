/* import React from 'react';
import PropTypes from 'prop-types';
import VimeoPlayer from '@vimeo/player';

// заменить на контейнеры т.к. работы будет идти через него
// можно сделать через плеер самостоятельный, через апи
function Player(props) {
  return (
      <section className="player clearfix">
        <div className="container">
          <div className="wrap-container">
            <div className="responsive-wrapper-iframe ratio ratio16-9">
              <div className="ratio-content" ref={(ref) => { this.player = ref; }}>

                {/!* <iframe*!/}
                    {/!*src="https://player.vimeo.com/video/63804657?badge=0&amp;autopause=0&amp;player_id=0"*!/}
                    {/!*width="1280"*!/}
                    {/!*height="720"*!/}
                    {/!*frameborder="0"*!/}
                    {/!*title="BOLES"*!/}
                    {/!*webkitallowfullscreen*!/}
                    {/!*mozallowfullscreen*!/}
                    {/!*allowfullscreen*!/}
                {/!*!/> *!/}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

Player.propTypes    = {};
Player.defaultProps = {};

export default Player; */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import VimeoPlayer from '@vimeo/player';
import { EMPTY_OBJECT } from '../../constants/common';
import { lastSubPath } from '../../utils/helpers';
import { isEmpty } from '../../utils/check';

class Player extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.player = null;
  }

  componentWillReceiveProps(nextProps, nextContext) {
    debugger;
    const idVideo = lastSubPath(nextProps.video.uri);
    this.player.loadVideo(idVideo);
  }

  componentDidMount() {
    const { video } = this.props;

    const idVideo = isEmpty(video)
      ? 12155835
      : lastSubPath(this.props.video.uri);

    this.player = new VimeoPlayer(this.player, {
      id: idVideo,
      //width: 640,
      byline: true,
      portrait: false,
      speed: true,
      title: false,
    });

    this.player.on('play', function () {
      console.log('played the video!');
    });
  }

  render() {
    return (
      <section className="player clearfix">
        <div className="container">
          <div className="wrap-container">
            <div className="responsive-wrapper-iframe ratio ratio16-9">
              <div className="ratio-content"
                   ref={(ref) => { this.player = ref; }}>

                {/* <iframe*/}
                {/*src="https://player.vimeo.com/video/63804657?badge=0&amp;autopause=0&amp;player_id=0"*/}
                {/*width="1280"*/}
                {/*height="720"*/}
                {/*frameborder="0"*/}
                {/*title="BOLES"*/}
                {/*webkitallowfullscreen*/}
                {/*mozallowfullscreen*/}
                {/*allowfullscreen*/}
                {/*/> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Player.propTypes = {
  video: PropTypes.object,
};
Player.defaultProps = {
  video: EMPTY_OBJECT,
};

export default Player;

