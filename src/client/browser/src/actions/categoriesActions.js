import { normalize } from 'normalizr';
import {
  CATEGORIES_GET_REQUEST,
  CATEGORIES_GET_SUCCESS,
  CATEGORIES_GET_FAILURE,
} from '../constants/categories';
import { categoryListSchema } from '../normalize';
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
      const { categories: { itemsByKey } } = getState();

      if (isEmpty(itemsByKey)) {
        dispatch(request(CATEGORIES_GET_REQUEST));

        fetchService.get('/categories')
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
      } else {
        resolve(itemsByKey);
      }
    });
}

