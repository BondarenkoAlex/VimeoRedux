/* eslint-disable no-use-before-define,import/prefer-default-export */
import { normalize } from 'normalizr';
import {
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
} from '../constants/user';
import { videoSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { getVideo } from '../selectors';
import {
  getCategory,
  getIdVideo,
} from '../utils/getParams';
import { isEmpty } from '../utils/check';
import { getSubcategoriesIfNeed } from './subcategoriesActions';

export function getUserIfNeed(videoId, page = 0, perPage = 25) {
  return async (dispatch, getState) => {
    new Promise((resolve, reject) => {
      const { users: { usersByKey }, videos: { videosByKey } } = getState();
      // todo что делать если уже ушел запрос, а мы делаем потом другой запрос
      const video = videosByKey[videoId];

      if (!isEmpty(itemsByKey[userUri])) {

        dispatch(request(USER_GET_REQUEST));
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

        // .then((categories) => {
        //   const categoryObj = categories[categoryParam];
        //   const uri = categoryObj.uri;
        //   return dispatch(loadSubcategories(uri, categoryParam));
        // })
        // .then(itemsByKey => resolve(itemsByKey));
      } else {
        dispatch(loadVideo(params));
      }
    };
  };
}

// function loadVideo(params) {
//   return (dispatch, getState) => {
//     // new Promise((resolve) => {
//     const video = getVideo(getState(), params);
//     const idVideo = getIdVideo(params);
//     if (isEmpty(video)) {
//       dispatch(request(VIDEO_GET_REQUEST));
//       fetchService.get(`/videos/${idVideo}`)
//         .then(
//           (data) => {
//             const normalizedData = normalize(data, videoSchema);
//             dispatch(action(VIDEO_GET_SUCCESS, normalizedData.entities.videos));
//           },
//
//           (error) => {
//             dispatch(action(VIDEO_GET_FAILURE, error));
//           },
//         );
//     }
//     // });
//   };
// }

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
