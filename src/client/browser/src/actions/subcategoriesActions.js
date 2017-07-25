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

export function getSubcategoriesIfNeed(key) {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      const { categories: { itemsByKey } } = getState();

      if (isEmpty(itemsByKey)) {
        dispatch(getCategoriesIfNeed())
          .then((items) => {
            getCategiries(items, key, dispatch)
              .then(data => resolve(data));
          });
      } else {
        getCategiries(itemsByKey, key, dispatch)
          .then(data => resolve(data));
      }
    });

  function getCategiries(itemsByKey, key, dispatch) {
    return new Promise((resolve) => {
      const uri = itemsByKey[key].uri;
      dispatch(loadSubcategories(key, uri))
        .then(data => resolve(data));
    });
  }
}

function loadSubcategories(key, uri) {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      const { subcategories } = getState();
      const subcategory = subcategories[key];
      if (isEmpty(subcategory)) {
        dispatch(request(SUBCATEGORIES_GET_REQUEST, key));

        fetchService.get(`${uri}/subcategories`)
          .then(
            (data) => {
              const normalizedData = normalize(data.data, categoryListSchema);
              // const payload = {
              //   [key]: normalizedData.entities.categories,
              // };
              const payload = normalizedData.entities.categories;
              dispatch(action(SUBCATEGORIES_GET_SUCCESS, payload, key));
              resolve(normalizedData.entities.categories);
            },

            (error) => {
              dispatch(action(SUBCATEGORIES_GET_FAILURE, error, key));
              return [];
            },
          );
      }
    });

}

