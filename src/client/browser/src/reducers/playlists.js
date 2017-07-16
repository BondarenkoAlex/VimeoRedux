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
      const { key } = action.payload.playlist;

      const data = action.payload.playlist[key];
      const items = data.data;
      delete data.data;

      const stateBykey = state.items[key] || {};
      const itemsByKey = stateBykey.items || [];

      return {
        ...state,
        isFetching: false,
        error: null,
        items: {
          [key]: {
            ...stateBykey,
            ...data,
            items: [...itemsByKey, ...items],
          },
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

