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
import Category from '../../../components/Content/Category';

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
    debugger;
    return (
      <div>[*Component is PlaylistContainer*]</div>
    );
  }
}

PlaylistContainer.propTypes = {};
PlaylistContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({
  //categories: state.categories,
  //subcategories: state.subcategories,
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getPlaylistIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);