/* eslint-disable no-use-before-define */
import { normalize } from 'normalizr';
import {
  PLAYLISTS_GET_FAILURE,
  PLAYLISTS_GET_REQUEST,
  PLAYLISTS_GET_SUCCESS,
} from '../constants/playlists';
import { videoListSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { isEmpty } from '../utils/check';
import { getSubcategoriesIfNeed } from './subcategoriesActions';
import {
  getVideosSubcategory,
} from '../selectors';
import { buildKeyVideoStore } from '../utils/helpers';
import {
  getSubcategory,
  getQueryObject,
  getParamsFromParams,
} from '../utils/getParams';

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

export default function getPlaylistIfNeed(obj) {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      const videos = getVideosSubcategory(getState(), obj); // array
      const subcategoryParam = getSubcategory(obj);
      const params = getParamsFromParams(obj);

      if (isEmpty(videos)) {
        dispatch(getSubcategoriesIfNeed(params))
          .then((categories) => {
            const subcategoryObj = categories[subcategoryParam];
            const uri = subcategoryObj.metadata.connections.videos.uri;

            const key = buildKeyVideoStore({
              ...params,
              ...getQueryObject(obj),
            });

            return dispatch(loadPlaylist(uri, key));
          })
          .then(itemsByKey => resolve(itemsByKey));
      } else {
        resolve(videos);
      }
    });
}

function loadPlaylist(uri, key) {
  return dispatch =>
    new Promise((resolve) => {
      dispatch(request(PLAYLISTS_GET_REQUEST));

      fetchService.get(uri)
        .then(
          (data) => {
            const normalizedData = normalize(data, videoListSchema);
            const videos = normalizedData.entities.videos;
            const payload = {
              playlist: {
                key,
                [key]: normalizedData.entities.videosByCategory[normalizedData.result],
              },
              videos,
            };
            dispatch(action(PLAYLISTS_GET_SUCCESS, payload));
            resolve(videos);
          },

          (error) => {
            dispatch(action(PLAYLISTS_GET_FAILURE, error));
          },
        );
    });
}
