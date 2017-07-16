import {
  //PLAYLISTS_GET_FAILURE,
  //PLAYLISTS_GET_REQUEST,
  PLAYLISTS_GET_SUCCESS,
} from '../constants/playlists';

const initialState = {};

export default function videos(state = initialState, action) {
  switch (action.type) {
    // case CATEGORIES_GET_REQUEST: {
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };
    // }

    case PLAYLISTS_GET_SUCCESS: {
      return {
        ...state,
        ...action.payload.videos,
        //isFetching: false,
        //error: null,
        // items: {
        //   ...state.items
        //   action.payload
        // },
      };
    }

    // case CATEGORIES_GET_FAILURE: {
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: action.payload,
    //   };
    // }

    default:
      return state;
  }
}

