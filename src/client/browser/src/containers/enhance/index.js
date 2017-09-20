import {
  lifecycle,
  compose,
} from 'recompose';
import { connect } from 'react-redux';
import { getCategory } from '../../utils/getParams';
import { getSubcategoriesIfNeed } from '../../actions/subcategoriesActions';

export const withCategories = lifecycle({
  componentWillMount() {
    this.props.getCategoriesIfNeed();
  },
});

export const withSubcategories = compose(
  connect(),
  lifecycle({
    componentWillMount() {
      const { props } = this;
      const { dispatch } = props;
      const category = getCategory(props);
      dispatch(getSubcategoriesIfNeed(category));
    },
  }),
);
