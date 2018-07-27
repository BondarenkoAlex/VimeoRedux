import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import Player from '../../components/PlayerContainer/PlayerContainer';

class PlayerContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  render() {
    return (
        <Player/>
    );
  }
}

PlayerContainer.propTypes    = {};
PlayerContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
    bindActionCreators({}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);
