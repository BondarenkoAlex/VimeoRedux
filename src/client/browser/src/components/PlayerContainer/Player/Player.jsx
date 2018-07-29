import React from 'react';
import PropTypes from 'prop-types';
import Ratio from '../../common/Ratio/Ratio';
import { EMPTY_OBJECT } from '../../../constants/common';
import style from './player.module.scss';

function Player({ refFunc }) {
  return (
    <Ratio ratio="16:9">
      <div
        className={style.player}
        ref={refFunc}
      />
    </Ratio>
  );
}

Player.propTypes = {
  refFunc: PropTypes.func,
};
Player.defaultProps = {};

export default Player;
