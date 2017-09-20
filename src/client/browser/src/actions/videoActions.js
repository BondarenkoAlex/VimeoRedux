/* eslint-disable no-use-before-define,import/prefer-default-export */
import { normalize } from 'normalizr';
import {
  VIDEO_GET_FAILURE,
  VIDEO_GET_REQUEST,
  VIDEO_GET_SUCCESS,
} from '../constants/video';
import { videoSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import {
  getVideo,
} from '../selectors';
import {
  getIdVideo,
} from '../utils/getParams';
import { isEmpty } from '../utils/check';

export function getVideoIfNeed(params) {
  return (dispatch, getState) => {
    // new Promise((resolve, reject) => {
    // const { categories: { itemsByKey } } = getState();
    const video = getVideo(getState(), params); // array
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
    // else {
    //   // resolve(itemsByKey);
    // }
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
