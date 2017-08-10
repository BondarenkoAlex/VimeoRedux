import {
  //PLAYLISTS_GET_FAILURE,
  //PLAYLISTS_GET_REQUEST,
  PLAYLISTS_GET_SUCCESS,
} from '../constants/playlists';

const initialState = {};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case PLAYLISTS_GET_SUCCESS: {
      return {
        ...state,
        ...action.payload.videos,
      };
    }

    default:
      return state;
  }
}

