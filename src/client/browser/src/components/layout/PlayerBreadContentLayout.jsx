import React, {
  PropTypes,
} from 'react';

import Player from '../../components/Player';
import BreadcrumsFilter from '../../components/BreadcrumsFilter';
import Content from '../../components/Content';

function PlayerBreadContentLayout() {
  return (
    <div>
      <Player />
      <BreadcrumsFilter />
      <Content />
    </div>
  );
}

PlayerBreadContentLayout.propTypes = {};
PlayerBreadContentLayout.defaultProps = {};

export default PlayerBreadContentLayout;