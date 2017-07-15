import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';

class PlaylistContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
      <div>[*Component is PlaylistContainer*]</div>
    );
  }
}

PlaylistContainer.propTypes = {};
PlaylistContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistContainer);