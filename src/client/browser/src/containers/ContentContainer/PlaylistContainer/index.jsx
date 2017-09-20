/* eslint-disable react/forbid-prop-types */
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import getPlaylistIfNeed from '../../../actions/playlistsActions';
import Playlist from '../../../components/Content/Playlist';
import {
  getSubcategoryTitle,
  getVideosSubcategory,
} from '../../../selectors';
import {
  getParamsFromProps,
} from '../../../utils/getParams';
import queryToObject from '../../../utils/queryToObject';

class PlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const params = getParamsFromProps(this.props);

    const { location: { search } } = this.props;
    const queryObject = queryToObject(search);

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
            match,
          } = this.props;

    return (
      <Playlist
        title={title}
        items={videos}
        isLoading={isLoading}
      />
    );
  }
}

PlaylistContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  videos: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  getPlaylistIfNeed: PropTypes.func.isRequired,
};
PlaylistContainer.defaultProps = {
  title: '',
};

const mapStateToProps = (state, ownProps) => {
  const params = getParamsFromProps(ownProps);
  return ({
    isLoading: state.playlists.isFetching,
    title: getSubcategoryTitle(state, params),
    videos: getVideosSubcategory(state, params),
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getPlaylistIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
