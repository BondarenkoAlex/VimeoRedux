import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import Player from './Player/Player';
import VimeoPlayer from '@vimeo/player';
import { EMPTY_OBJECT } from '../../constants/common';
import { lastSubPath } from '../../utils/helpers';
import { consoleCustom } from '../../utils/consoleCustom';
import { isEmpty } from '../../utils/check';

import style from './player-container.module.scss';

class PlayerContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.player = null;
  }

  componentDidMount() {
    const { video } = this.props;

    const idVideo = isEmpty(video)
      ? 12155835
      : lastSubPath(this.props.video.uri);

    this.player = new VimeoPlayer(this.player, {
      id: idVideo,
      // width: 640,
      byline: true,
      portrait: false,
      speed: true,
      title: false,
    });

    this.player.on('play', () => {
      consoleCustom.log('played the video!');
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { video } = nextProps;

    if (!isEmpty(video)) {
      const idVideo = lastSubPath(video.uri);
      this.player.loadVideo(idVideo);
    }
  }

  render() {
    return (
      <section className={style.playerContainer}>
        <div className="container">
          <div className="wrap-container">
            <Player refFunc={(ref) => { this.player = ref; }} />
          </div>
        </div>
      </section>
    );
  }
}

PlayerContainer.propTypes = {
  video: PropTypes.object,
};
PlayerContainer.defaultProps = {
  video: EMPTY_OBJECT,
};

export default PlayerContainer;

