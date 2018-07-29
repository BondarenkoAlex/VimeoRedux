import { VIDEO_GET_FAILURE, VIDEO_GET_REQUEST, VIDEO_GET_SUCCESS } from "../constants/video";

const initialState = {
  isFetching: false,
  error: null,
  itemsByKey: {},
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case VIDEO_GET_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case VIDEO_GET_SUCCESS: {
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

    case VIDEO_GET_FAILURE: {
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
