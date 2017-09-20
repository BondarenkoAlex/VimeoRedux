/* eslint-disable react/forbid-prop-types */
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  compose,
} from 'recompose';
import { withCategoriesActions } from '../../enhance';
import autoBind from 'react-autobind';
import { getCategoriesIfNeed } from '../../../actions';
import Category from '../../../components/Content/Category';
import { CATEGORIES_TITLE } from '../../../constants/common';

class CategoryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
    this.state = { counter: 1 };
  }

  // componentWillMount() {
  //   this.props.getCategoriesIfNeed();
  // }

  onClick() {
    this.setState({
      counter: ++this.state.counter,
    });
  }

  render() {
    const {
            title,
            categories,
            match: { url },
          } = this.props;
    let title1 = title + this.state.counter;
    return (
      <Category
        title={title1}
        itemsByKey={categories.itemsByKey}
        isLoading={categories.isFetching}
        url={url}
        onClick={this.onClick}
      />
    );
  }
}

CategoryContainer.propTypes = {
  getCategoriesIfNeed: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  title: PropTypes.string,
};
CategoryContainer.defaultProps = {
  title: CATEGORIES_TITLE,
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getCategoriesIfNeed,
  }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withCategoriesActions,
)(CategoryContainer);
