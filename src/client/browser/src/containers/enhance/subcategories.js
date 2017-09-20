import PropTypes from 'prop-types';
import {
  lifecycle,
  compose,
  setPropTypes,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategory } from '../../utils/getParams';
import { getSubcategoriesIfNeed } from '../../actions/subcategoriesActions';

const mapStateToProps = (state, ownProps) => {
  const category = getCategory(ownProps);
  return ({
    title: getCategoryTitle(state, category),
    subcategory: getSubcategoryByCategoryParam(state, ownProps),
  });
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getSubcategoriesIfNeed,
  }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  setPropTypes({
    getSubcategoriesIfNeed: PropTypes.func.isRequired,
    title: PropTypes.string,
    subcategory: PropTypes.object,
  }),
  lifecycle({
    componentWillMount() {
      const { props } = this;
      const { dispatch } = props;
      const category = getCategory(props);
      dispatch(getSubcategoriesIfNeed(category));
    },
  }),
);
