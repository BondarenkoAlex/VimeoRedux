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
import { getSubcategoriesIfNeed } from '../../../actions';
import Category from '../../../components/Content/Category';
import {
  getCategoryTitle,
  getSubcategoryByCategoryParam,
} from '../../../selectors';
import { Param } from '../../../constants/common';

class SubcategoryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    this.props.getSubcategoriesIfNeed(params[Param.CATEGORY]);
  }

  render() {
    const {
            match : { url },
            title,
            subcategory,
          } = this.props;
    return (
      <Category
        title={title}
        itemsByKey={subcategory.itemsByKey}
        url={url}
        isLoading={subcategory.isFetching}
      />
    );
  }
}

SubcategoryContainer.propTypes = {
  getSubcategoriesIfNeed: PropTypes.func.isRequired,
  title: PropTypes.string,
  subcategories: PropTypes.object,
  match: PropTypes.object.isRequired,
};
SubcategoryContainer.defaultProps = {
  title: '',
  subcategory: {},
};

const mapStateToProps = (state, ownProps) => ({
  title: getCategoryTitle(state, ownProps),
  subcategory: getSubcategoryByCategoryParam(state, ownProps),
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getSubcategoriesIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryContainer);
