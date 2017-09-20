import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  compose,
  lifecycle,
} from 'recompose';
import autoBind from 'react-autobind';
import { getCategoriesIfNeed } from '../../../actions';
import Category from '../../../components/Content/Category';

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

            categories,
            match: { url },
          } = this.props;
    let title = 'my title ' + this.state.counter;
    return (
      <Category
        title={title}
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
  title: 'Categories',
};

const mapStateToProps = (state /*,ownProps*/) => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getCategoriesIfNeed,
  }, dispatch);



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withCategories,
)(CategoryContainer);
