import { normalize } from 'normalizr';
import {
  PLAYLISTS_GET_FAILURE,
  PLAYLISTS_GET_REQUEST,
  PLAYLISTS_GET_SUCCESS,
} from '../constants/playlists';
import { getSubcategoriesIfNeed } from './categoriesActions';
import { videoListSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { isEmpty } from '../utils/check';

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

export function getPlaylistIfNeed(keyCat, keySubcat) {
  return (dispatch, getState) => {

    const { subcategories: { items } } = getState();
    const subcategoriesByKey = items[keyCat];

    if (isEmpty(subcategoriesByKey)) {
      dispatch(getSubcategoriesIfNeed(keyCat))
        .then((items) => {
          getVideos(items, keyCat, keySubcat, dispatch);
        });
    } else {
      getVideos(subcategoriesByKey, keyCat, keySubcat, dispatch);
    }
  };

  function getVideos(subcategories, keyCat, keySubcat, dispatch) {
    const key = `${keyCat}|${keySubcat}`;
    const subcategory = subcategories[keySubcat];
    const uri = subcategory.metadata.connections.videos.uri;
    dispatch(loadPlaylist(key, uri));
  }
}

function loadPlaylist(key, uri) {
  return (dispatch, getState) => {
    //new Promise((resolve) => {
    const { playlists: { items } } = getState();
    const playlist = items[key];

    if (isEmpty(playlist)) {
      dispatch(request(PLAYLISTS_GET_REQUEST));

      fetchService.get(uri)
        .then(
          (data) => {
            const normalizedData = normalize(data, videoListSchema);
            const payload = {
              playlist: {
                key,
                [key]: normalizedData.entities.videosByCategory[normalizedData.result],
              },
              videos: normalizedData.entities.videos,
            };
            dispatch(action(PLAYLISTS_GET_SUCCESS, payload));
          },

          (error) => {
            dispatch(action(PLAYLISTS_GET_FAILURE, error));
          },
        );
    }
    //});
  }
}