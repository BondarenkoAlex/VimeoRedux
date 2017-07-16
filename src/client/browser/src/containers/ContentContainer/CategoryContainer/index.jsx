import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import { getCategoriesIfNeed } from '../../../actions';
import Category from '../../../components/Content/Category';

class CategoryContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    this.props.getCategoriesIfNeed();
  }

  render() {
    const {
            categories,
            match: { url },
          } = this.props;
    const title = 'Categories';
    const { items } = categories;
    return (
      <Category
        title={title}
        items={items}
        url={url}
      />
    );
  }
}

CategoryContainer.propTypes = {
  getCategoriesIfNeed: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
CategoryContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getCategoriesIfNeed,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);