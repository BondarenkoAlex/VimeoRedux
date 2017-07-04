import { normalize } from 'normalizr';
import { categoryListSchema } from '../normalize';
import {
  CATEGORIES_ALL_GET_REQUEST,
  CATEGORIES_ALL_GET_SUCCESS,
  CATEGORIES_ALL_GET_FAILURE,
} from '../constants/categories';
import fetchService from '../utils/fetchService';

export function getAllCategories() {
  return (dispatch, getState) => {
    dispatch(request(CATEGORIES_ALL_GET_REQUEST));

    fetchService.get('./categories')
      .then(
        (data) => {
          debugger;
          const normalizedData = normalize(data.data, categoryListSchema);
          dispatch(action(CATEGORIES_ALL_GET_SUCCESS, normalizedData.entities.names));
        },

        (error) => {
          debugger;
          dispatch(action(CATEGORIES_ALL_GET_FAILURE, error));
        },
      );
  };
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

