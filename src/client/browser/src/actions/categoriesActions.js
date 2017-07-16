import { normalize } from 'normalizr';
import {
  CATEGORIES_GET_REQUEST,
  CATEGORIES_GET_SUCCESS,
  CATEGORIES_GET_FAILURE,
  SUBCATEGORIES_GET_REQUEST,
  SUBCATEGORIES_GET_SUCCESS,
  SUBCATEGORIES_GET_FAILURE,
} from '../constants/categories';
import { categoryListSchema, categorySchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { isEmpty } from '../utils/check';

function request(type) {
  return {
    type,
  };
}

function action(type, payload) {
  return {
    type,
    payload,
  };
}

export function getCategoriesIfNeed() {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      const { categories: { items } } = getState();

      if (isEmpty(items)) {
        dispatch(request(CATEGORIES_GET_REQUEST));

        fetchService.get('./categories')
          .then(
            (data) => {
              const normalizedData = normalize(data.data, categoryListSchema);
              dispatch(action(CATEGORIES_GET_SUCCESS, normalizedData.entities.categories));
              resolve(normalizedData.entities.categories);
            },

            (error) => {
              dispatch(action(CATEGORIES_GET_FAILURE, error));
            },
          );
      }
    });
}

export function getSubcategoryIfNeed(key) {
  return (dispatch, getState) => {
    const { categories: { items } } = getState();

    if (isEmpty(items)) {
      dispatch(getCategoriesIfNeed())
        .then((items) => {
          const uri = items[key].uri;
          dispatch(loadSubcategories(key, uri));
        });
    } else {
      const uri = items[key].uri;
      dispatch(loadSubcategories(key, uri));
    }
  };
}

function loadSubcategories(key, uri) {
  return (dispatch, getState) => {
    const { subcategories: { items } } = getState();
    const subcategory = items[key];
    if (isEmpty(subcategory)) {
      dispatch(request(SUBCATEGORIES_GET_REQUEST));

      fetchService.get(`${uri}/subcategories`)
        .then(
          (data) => {
            const normalizedData = normalize(data.data, categoryListSchema);
            const payload = {
              [key]: normalizedData.entities.categories,
            };
            dispatch(action(SUBCATEGORIES_GET_SUCCESS, payload));
          },

          (error) => {
            dispatch(action(SUBCATEGORIES_GET_FAILURE, error));
          },
        );
    }
  };
}

