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

class PlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const { match } = this.props;
    const { params: { category, subcategory } } = match;
    if (category !== undefined && subcategory !== undefined) {
      this.props.getPlaylistIfNeed(category, subcategory);
    } else {
      consoleCustom.error(`The category and subcategory in ${match.url} are do not find`);
    }
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
  title: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  getPlaylistIfNeed: PropTypes.func.isRequired,
};
PlaylistContainer.defaultProps = {
  title: '',
};

const getParams = (_, props) => props.match.params;
const getSubcategories = state => state.subcategories;
const getPlaylists = state => state.playlists;
const getVideos = state => state.videos;

const getTitleSubcategory = createSelector(
  [getSubcategories, getParams],
  (subcategories, params) => {
    const { category: categoryUrl, subcategory: subcategoryUrl } = params;
    const category = subcategories[categoryUrl];
    const subcategiry = category && category.itemsByKey[subcategoryUrl];
    return subcategiry && subcategiry.name; // undefined or name
  },
);

const getVideosSubcategory = createSelector(
  [getPlaylists, getVideos, getParams],
  (playlists, videos, params) => {
    const { category, subcategory } = params;
    const key = `${category}|${subcategory}`;
    const playlistSubcategory = playlists.itemsByKey[key];
    const playlistKeys = (playlistSubcategory && playlistSubcategory.items) || [];
    const videosSubcategory = playlistKeys.map(k => videos[k]);
    return videosSubcategory;
  },
);

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.playlists.isFetching,
  title: getTitleSubcategory(state, ownProps),
  videos: getVideosSubcategory(state, ownProps),
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getPlaylistIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
