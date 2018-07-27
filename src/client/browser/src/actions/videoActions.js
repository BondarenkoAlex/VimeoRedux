/* eslint-disable no-use-before-define,import/prefer-default-export */
import { normalize } from 'normalizr';
import {
  VIDEO_GET_FAILURE,
  VIDEO_GET_REQUEST,
  VIDEO_GET_SUCCESS,
} from '../constants/video';
import { videoSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { getVideo } from '../selectors';
import {
  getCategory,
  getIdVideo,
} from '../utils/getParams';
import { isEmpty } from '../utils/check';
import { getSubcategoriesIfNeed } from './subcategoriesActions';

export function getVideoIfNeed(params) {
  return async (dispatch, getState) => {
    // new Promise((resolve, reject) => {
    // const { categories: { itemsByKey } } = getState();

    const categoryParam = getCategory(params);
    if (!isEmpty(categoryParam)) {
      await dispatch(getSubcategoriesIfNeed(params));
      dispatch(loadVideo(params));

      // .then((categories) => {
      //   const categoryObj = categories[categoryParam];
      //   const uri = categoryObj.uri;
      //   return dispatch(loadSubcategories(uri, categoryParam));
      // })
      // .then(itemsByKey => resolve(itemsByKey));
    } else {
      dispatch(loadVideo(params));
    }

    // if (isEmpty(video)) {
    //   dispatch(request(VIDEO_GET_REQUEST));
    //   fetchService.get(`/videos/${idVideo}`)
    //     .then(
    //       (data) => {
    //         const normalizedData = normalize(data, videoSchema);
    //         dispatch(action(VIDEO_GET_SUCCESS, normalizedData.entities.videos));
    //       },
    //
    //       (error) => {
    //         dispatch(action(VIDEO_GET_FAILURE, error));
    //       },
    //     );
    // }
  };
}

function loadVideo(params) {
  return (dispatch, getState) => {
    // new Promise((resolve) => {
    const video = getVideo(getState(), params);
    const idVideo = getIdVideo(params);
    if (isEmpty(video)) {
      dispatch(request(VIDEO_GET_REQUEST));
      fetchService.get(`/videos/${idVideo}`)
        .then(
          (data) => {
            const normalizedData = normalize(data, videoSchema);
            dispatch(action(VIDEO_GET_SUCCESS, normalizedData.entities.videos));
          },

          (error) => {
            dispatch(action(VIDEO_GET_FAILURE, error));
          },
        );
    }
    // });
  };
}

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
