import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import CategoryListItem from '../../components/Content/Category/CategoryListItem';
import { getAllCategories } from '../../actions';

class CategoryListItemContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    this.props.getAllCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <CategoryListItem categories={categories} />
    );
  }
}

CategoryListItemContainer.propTypes = {
  getAllCategories: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
};
CategoryListItemContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getAllCategories,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListItemContainer);

