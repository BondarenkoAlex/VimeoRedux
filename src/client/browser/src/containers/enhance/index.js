import {
  lifecycle,
} from 'recompose';
import {getCategory} from '../../utils/getParams';

export const withCategories = lifecycle({
  componentWillMount() {
    const { getCategoriesIfNeed } = this.props;
    getCategoriesIfNeed();
  },
});

export const withSubcategories = lifecycle({
  componentWillMount() {
    const { match: { params } } = this.props;
    this.props.getSubcategoriesIfNeed(params[PARAM.CATEGORY]);
  },
});
