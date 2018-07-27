/* eslint-disable react/forbid-prop-types */
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import getPlaylistIfNeed from '../../../actions/playlistsActions';
import Playlist from '../../../components/Content/CategoryPlaylist/Playlist';
import {
  getSubcategoryTitle,
  getVideosSubcategory,
} from '../../../selectors';
import {
  getParamsFromProps,
  getQueryFromProps,
  getSubcategory,
} from '../../../utils/getParams';
import { EMPTY_STRING } from '../../../constants/common';
import Player from '../../../components/PlayerContainer/PlayerContainer';
import BreadcrumsFilter from '../../../components/BreadcrumsFilter';
import { isEmpty } from '../../../utils/check';
import { ROOT_URI } from '../../../constants/config';

class PlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const params = getParamsFromProps(this.props);
    const queryObject = getQueryFromProps(this.props);

    const obj = {
      ...params,
      ...queryObject,
    };

    this.props.getPlaylistIfNeed(obj);
  }

  render() {
    const {
            title,
            videos,
            isLoading,
            uri,
          } = this.props;

    return (
      <div>
        <Player />
        <BreadcrumsFilter />
        <Playlist
          title={title}
          items={videos}
          isLoading={isLoading}
          uri={uri}
        />
      </div>
    );
  }
}

PlaylistContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  videos: PropTypes.array.isRequired,
  uri: PropTypes.string.isRequired,
  title: PropTypes.string,
  getPlaylistIfNeed: PropTypes.func.isRequired,
};
PlaylistContainer.defaultProps = {
  title: EMPTY_STRING,
};

const mapStateToProps = (state, ownProps) => {
  const params = getParamsFromProps(ownProps);
  const query = getQueryFromProps(ownProps);
  const subcategory = getSubcategory(params);
  const { location: { pathname } } = ownProps;
  const uri = isEmpty(subcategory)
    ? `${ROOT_URI}/videos`
    : pathname;
  return ({
    isLoading: state.playlists.isFetching,
    title: getSubcategoryTitle(state, params),
    videos: getVideosSubcategory(state, { ...params, ...query }),
    uri,
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getPlaylistIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
