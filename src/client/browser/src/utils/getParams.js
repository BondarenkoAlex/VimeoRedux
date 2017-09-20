import {
  PARAM,
  EMPTY_STRING,
} from '../constants/common';

export function getCategory(props) {
  const { match: { params } } = props;
  return params[PARAM.CATEGORY] || EMPTY_STRING; // string or  empty string''
}

export function getSubcategory(props) {
  const { match: { params } } = props;
  return params[PARAM.SUBCATEGORY] || EMPTY_STRING; // string or  empty string''
}
