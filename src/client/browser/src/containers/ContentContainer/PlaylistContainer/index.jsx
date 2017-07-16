import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
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
            videos,
            subcategories,
            playlists,
            match,
          } = this.props;
    const { url, params: { category, subcategory } } = match;

    let title = '';
    let items = [];

    const categoryByKey = subcategories.items[category];
    if (!isEmpty(categoryByKey)) {
      title = categoryByKey[subcategory].name;
    }

    const key = `${category}|${subcategory}`;
    const playlistKeys = playlists.items[key];
    if (!isEmpty(playlistKeys)) {
      items = playlistKeys.items.map(key => videos[key]);
    }

    return (
      <Playlist
        title={title}
        items={items}
      />
    );
  }
}

PlaylistContainer.propTypes = {
  videos: PropTypes.object.isRequired,
  subcategories: PropTypes.object.isRequired,
  playlists: PropTypes.object.isRequired,
  getPlaylistIfNeed: PropTypes.func.isRequired,
};
PlaylistContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({
  videos: state.videos,
  subcategories: state.subcategories,
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getPlaylistIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);
