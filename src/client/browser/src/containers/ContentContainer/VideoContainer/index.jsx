/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import Video from '../../../components/Content/Video';
import Player from '../../../components/PlayerContainer/PlayerContainer';
import { getVideoIfNeed } from '../../../actions/videoActions';
import { getParamsFromProps } from '../../../utils/getParams';
import { getVideo } from '../../../selectors';
import BreadcrumsFilter from '../../../components/BreadcrumsFilter';

class VideoContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const params = getParamsFromProps(this.props);
    this.props.getVideoIfNeed(params);
  }

  render() {
    const { video } = this.props;
    return (
      <div>
        <BreadcrumsFilter />
        <Player video={video} />
        <Video video={video} />
      </div>
    );
  }
}

VideoContainer.propTypes = {
  getVideoIfNeed: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired,
};
VideoContainer.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  const params = getParamsFromProps(ownProps);
  return ({
    video: getVideo(state, params),
  });
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getVideoIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);
