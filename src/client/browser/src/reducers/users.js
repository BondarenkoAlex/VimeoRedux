import {
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
} from '../constants/user';

const initialState = {
  isFetching: false,
  error: null,
  itemsByKey: {},
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case USER_GET_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case USER_GET_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        itemsByKey: {
          ...state.itemsByKey,
          ...action.payload,
        },
      };
    }

    case USER_GET_FAILURE: {
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
