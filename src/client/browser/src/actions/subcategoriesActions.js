/* eslint-disable no-use-before-define,import/prefer-default-export */
import { normalize } from 'normalizr';
import {
  SUBCATEGORIES_GET_REQUEST,
  SUBCATEGORIES_GET_SUCCESS,
  SUBCATEGORIES_GET_FAILURE,
} from '../constants/categories';
import { categoryListSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { isEmpty } from '../utils/check';
import { getCategoriesIfNeed } from './categoriesActions';
import {
  getSubcategoryByCategoryParam,
} from '../selectors';
import { PARAM } from '../constants/common';

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

export function getSubcategoriesIfNeed(categoryParam) {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      const props = { match: { params: { [PARAM.CATEGORY]: categoryParam } } };
      const subcategory = getSubcategoryByCategoryParam(getState(), props);

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
            const normalizedData = normalize(data.data, categoryListSchema);
            const payload = normalizedData.entities.categories;
            dispatch(action(SUBCATEGORIES_GET_SUCCESS, payload, key));
            resolve(normalizedData.entities.categories);
          },

          (error) => {
            dispatch(action(SUBCATEGORIES_GET_FAILURE, error, key));
          },
        );
    });
}

