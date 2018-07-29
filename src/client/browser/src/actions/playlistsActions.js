/* eslint-disable no-use-before-define */
import { normalize } from "normalizr";
import {
  PLAYLISTS_GET_FAILURE,
  PLAYLISTS_GET_REQUEST,
  PLAYLISTS_GET_SUCCESS,
} from "../constants/playlists";
import {
  VIDEO_GET_SUCCESS,
} from "../constants/video";
import {
  USER_GET_SUCCESS,
} from "../constants/user";
import { videoListSchema } from "../normalize";
import fetchService from "../utils/fetchService";
import { isEmpty } from "../utils/check";
import { getSubcategoriesIfNeed } from "./subcategoriesActions";
import { actionCreator } from "./actionCreator";
import { getVideosSubcategory } from "../selectors";
import { buildKeyVideoStore } from "../utils/helpers";
import {
  getSubcategory,
  getQueryFromObject,
  getParamsFromParams,
} from "../utils/getParams";

export default function getPlaylistIfNeed(obj) {
  return (dispatch, getState) => new Promise(resolve => {
    const videos = getVideosSubcategory(getState(), obj); // array
    const subcategoryParam = getSubcategory(obj);
    const params = getParamsFromParams(obj);

    if (isEmpty(videos)) {
      dispatch(getSubcategoriesIfNeed(params))
        .then(categories => {
          const subcategoryObj = categories[subcategoryParam];
          const { uri } = subcategoryObj.metadata.connections.videos;

          const key = buildKeyVideoStore({
            ...params,
            ...getQueryFromObject(obj),
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
  return dispatch => new Promise(resolve => {
    dispatch(actionCreator(PLAYLISTS_GET_REQUEST));

    fetchService.get(uri).then(
      data => {
        const normalizedData = normalize(data, videoListSchema);
        const { videos, users } = normalizedData.entities;
        const payload = {
          key,
          [key]: normalizedData.entities.videosByCategory[normalizedData.result],
        };
        dispatch(actionCreator(VIDEO_GET_SUCCESS, videos));
        dispatch(actionCreator(USER_GET_SUCCESS, users));
        dispatch(actionCreator(PLAYLISTS_GET_SUCCESS, payload));
        resolve(videos);
      },

      error => {
        dispatch(actionCreator(PLAYLISTS_GET_FAILURE, error));
      },
    );
  });
}
