import {
  PLAYLISTS_GET_FAILURE,
  PLAYLISTS_GET_REQUEST,
  PLAYLISTS_GET_SUCCESS,
} from '../constants/playlists';

const initialState = {
  isFetching: false,
  error: null,
  items: {},
};

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case PLAYLISTS_GET_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case PLAYLISTS_GET_SUCCESS: {
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

    case PLAYLISTS_GET_FAILURE: {
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

