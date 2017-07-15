import {
  SUBCATEGORIES_GET_REQUEST,
  SUBCATEGORIES_GET_SUCCESS,
  SUBCATEGORIES_GET_FAILURE,
} from '../constants/categories';

const initialState = {
  isFetching: false,
  error: null,
  items: {},
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case SUBCATEGORIES_GET_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case SUBCATEGORIES_GET_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        items: {
          ...state.items,
          ...action.payload,
        },
      };
    }

    case SUBCATEGORIES_GET_FAILURE: {
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

