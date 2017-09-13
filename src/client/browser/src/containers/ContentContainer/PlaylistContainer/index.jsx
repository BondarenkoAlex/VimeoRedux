import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { getPlaylistIfNeed } from '../../../actions';
import Playlist from '../../../components/Content/Playlist';
import {
  getSubcategoryTitle,
  getVideosSubcategory,
} from '../../../selectors';
import { PARAM } from '../../../constants/common';
import queryToObject from '../../../utils/queryToObject';

class PlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    const { location: { search } } = this.props;
    debugger;
    if (search !== '') {
      const queryObject = queryToObject(search);
    }
    this.props.getPlaylistIfNeed(params[PARAM.CATEGORY], params[PARAM.SUBCATEGORY]);
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

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.playlists.isFetching,
  title: getSubcategoryTitle(state, ownProps),
  videos: getVideosSubcategory(state, ownProps),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getPlaylistIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
