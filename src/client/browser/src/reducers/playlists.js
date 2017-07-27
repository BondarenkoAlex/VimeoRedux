import {
  PLAYLISTS_GET_FAILURE,
  PLAYLISTS_GET_REQUEST,
  PLAYLISTS_GET_SUCCESS,
} from '../constants/playlists';

const initialState = {
  isFetching: false,
  error: null,
  itemsByKey: {},
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

      const stateBykey = state.itemsByKey[key] || {};
      const itemsByKey = stateBykey.itemsByKey || [];

      return {
        ...state,
        isFetching: false,
        error: null,
        itemsByKey: {
          ...state.itemsByKey,
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

