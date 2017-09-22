/* eslint-disable no-use-before-define,import/prefer-default-export */
import { normalize } from 'normalizr';
import {
  SUBCATEGORIES_GET_REQUEST,
  SUBCATEGORIES_GET_SUCCESS,
  SUBCATEGORIES_GET_FAILURE,
} from '../constants/categories';
import { /*categoryListSchema*/ subcategoryListSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { isEmpty } from '../utils/check';
import { getCategoriesIfNeed } from './categoriesActions';
import {
  getSubcategoryByCategoryParam,
} from '../selectors';
import { getCategory } from '../utils/getParams';

function request(type, key = null) {
  return {
    type,
    key,
  };
}

function action(type, payload, key = null) {
  return {
    type,
    payload,
    key,
  };
}

export function getSubcategoriesIfNeed(params) {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      const subcategory = getSubcategoryByCategoryParam(getState(), params);
      const categoryParam = getCategory(params);

      if (isEmpty(subcategory)) {
        dispatch(getCategoriesIfNeed())
          .then((categories) => {
            const categoryObj = categories[categoryParam];
            const uri = categoryObj.uri;
            return dispatch(loadSubcategories(uri, categoryParam));
          })
          .then(itemsByKey => resolve(itemsByKey));
      } else {
        resolve(subcategory.itemsByKey);
      }
    });
}

function loadSubcategories(uri, key) {
  return dispatch =>
    new Promise((resolve) => {
      dispatch(request(SUBCATEGORIES_GET_REQUEST, key));

      fetchService.get(`${uri}/subcategories`)
        .then(
          (data) => {
            const normalizedData = normalize(data.data, subcategoryListSchema /*categoryListSchema*/);
            const payload = normalizedData.entities.subcategories;
            dispatch(action(SUBCATEGORIES_GET_SUCCESS, payload, key));
            resolve(normalizedData.entities.subcategories);
          },

          (error) => {
            dispatch(action(SUBCATEGORIES_GET_FAILURE, error, key));
          },
        );
    });
}

