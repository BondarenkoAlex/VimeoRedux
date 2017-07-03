import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from 'react-autobind';
import CategoryListItem from '../../components/MainContent/Category/CategoryListItem';
import { getAllCategories } from '../../actions';

class CategoryListItemContainer extends Component {
  constructor(props, context) {
    super(props, context);
    autoBind(this);
  }

  componentWillMount() {
    debugger;
    this.props.getAllCategories();
  }

  render() {
    return (
      /*<CategoryListItem />*/
      null
    );
  }
}

CategoryListItemContainer.propTypes = {
  getAllCategories: PropTypes.func.isRequired,
};
CategoryListItemContainer.defaultProps = {};

const mapStateToProps = (state /*,ownProps*/) => ({});

const mapDispatchToProps = (dispatch /*,ownProps*/) => (
  bindActionCreators({
    getAllCategories,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListItemContainer);

