import {
  PARAM,
  PARAM_QUERY,
  EMPTY_OBJECT,
  EMPTY_STRING,
} from '../constants/common';

export function getCategory(params) {
  return params[PARAM.CATEGORY] || EMPTY_STRING; // string or  empty string''
}

export function getSubcategory(params) {
  return params[PARAM.SUBCATEGORY] || EMPTY_STRING; // string or  empty string''
}

export function getIdVideo(params) {
  return params[PARAM.ID_VIDEO] || EMPTY_STRING; // string or  empty string''
}

export function getParamsFromParams(params) {
  return {
    [PARAM.CATEGORY]: getCategory(params),
    [PARAM.SUBCATEGORY]: getSubcategory(params),
  };
}

export function getParamsFromProps(props) {
  const { match: { params } } = props;
  return getParamsFromParams(params);
}

export function getShowby(queryObject) {
  return queryObject[PARAM_QUERY.SHOWBY] || EMPTY_STRING; // string or  empty string''
}

export function getDuration(queryObject) {
  return queryObject[PARAM_QUERY.DURATION] || EMPTY_STRING; // string or  empty string''
}

export function getPeriod(queryObject) {
  return queryObject[PARAM_QUERY.PERIOD] || EMPTY_STRING; // string or  empty string''
}

export function getQueryObject(queryObject) {
  return {
    [PARAM_QUERY.SHOWBY]: getShowby(queryObject),
    [PARAM_QUERY.DURATION]: getDuration(queryObject),
    [PARAM_QUERY.PERIOD]: getPeriod(queryObject),
  };
}

