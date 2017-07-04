import {
  CATEGORIES_ALL_GET_FAILURE,
  CATEGORIES_ALL_GET_REQUEST,
  CATEGORIES_ALL_GET_SUCCESS
} from '../constants/categories';

const initialState = {
  isFetching: false,
  error: null,
  items: {},
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_ALL_GET_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case CATEGORIES_ALL_GET_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        items: action.payload,
      };
    }

    case CATEGORIES_ALL_GET_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

