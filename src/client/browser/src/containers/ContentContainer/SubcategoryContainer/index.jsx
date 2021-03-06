/* eslint-disable react/forbid-prop-types */
import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { getSubcategoriesIfNeed } from '../../../actions/subcategoriesActions';
import Category from '../../../components/Content/CategoryPlaylist/Category';
import { getParamsFromProps } from '../../../utils/getParams';
import {
  getCategoryTitle,
  getSubcategoryByCategoryParam,
} from '../../../selectors';
import {
  EMPTY_OBJECT,
  EMPTY_STRING,
} from '../../../constants/common';
import Player from '../../../components/PlayerContainer/PlayerContainer';
import BreadcrumsFilter from '../../../components/BreadcrumsFilter';

class SubcategoryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const params = getParamsFromProps(this.props);
    this.props.getSubcategoriesIfNeed(params);
  }

  render() {
    const {
            match: { url },
            title,
            subcategory,
          } = this.props;
    return (
      <div>
        <Player />
        <BreadcrumsFilter />
        <Category
          title={title}
          itemsByKey={subcategory.itemsByKey}
          url={url}
          isLoading={subcategory.isFetching}
        />
      </div>
    );
  }
}

SubcategoryContainer.propTypes = {
  getSubcategoriesIfNeed: PropTypes.func.isRequired,
  title: PropTypes.string,
  subcategory: PropTypes.object,
  match: PropTypes.object.isRequired,
};
SubcategoryContainer.defaultProps = {
  title: EMPTY_STRING,
  subcategory: EMPTY_OBJECT,
};

const mapStateToProps = (state, ownProps) => {
  const params = getParamsFromProps(ownProps);
  return ({
    title: getCategoryTitle(state, params),
    subcategory: getSubcategoryByCategoryParam(state, params),
  });
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getSubcategoriesIfNeed,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryContainer);
