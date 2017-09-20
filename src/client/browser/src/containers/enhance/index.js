import {
  lifecycle,
} from 'recompose';
import { getCategory } from '../../utils/getParams';

export const withCategories = lifecycle({
  componentWillMount() {
    this.props.getCategoriesIfNeed();
  },
});

export const withSubcategories = lifecycle({
  componentWillMount() {
    const category = getCategory(this.props);
    this.props.getSubcategoriesIfNeed(category);
  },
});
