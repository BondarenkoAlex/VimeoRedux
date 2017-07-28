import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { createSelector } from 'reselect';
import { isEmpty } from '../../../utils/check';
import { consoleCustom } from '../../../utils/consoleCustom';
import { getPlaylistIfNeed } from '../../../actions';
import Playlist from '../../../components/Content/Playlist';
import {
  getSubcategoryTitle,
  getVideosSubcategory,
} from '../../../selectors';
import { Param } from '../../../constants/common';

class PlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    this.props.getPlaylistIfNeed(params[Param.CATEGORY], params[Param.SUBCATEGORY]);
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
      />
    );
  }
}

PlaylistContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  videos: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
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

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPlaylistIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
