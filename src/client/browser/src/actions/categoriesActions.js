/* eslint-disable import/prefer-default-export,no-use-before-define */
import { normalize } from 'normalizr';
import {
  CATEGORIES_GET_FAILURE,
  CATEGORIES_GET_REQUEST,
  CATEGORIES_GET_SUCCESS,
} from '../constants/categories';
import { categoryListSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { isEmpty } from '../utils/check';

export function getCategoriesIfNeed() {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      const { categories: { itemsByKey } } = getState();

      if (isEmpty(itemsByKey)) {
        dispatch(request(CATEGORIES_GET_REQUEST));

        fetchService.get('/categories')
          .then(
            (data) => {
              const normalizedData = normalize(data.data, categoryListSchema);
              resolve(normalizedData.entities.categories);
              dispatch(action(CATEGORIES_GET_SUCCESS, normalizedData.entities.categories));
            },

            (error) => {
              dispatch(action(CATEGORIES_GET_FAILURE, error));
              reject(error);
            },
          );
      } else {
        resolve(itemsByKey);
      }
    });
}

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

