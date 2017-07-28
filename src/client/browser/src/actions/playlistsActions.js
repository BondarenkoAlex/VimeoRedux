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
import { Param } from '../constants/common';

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

export function getPlaylistIfNeed(categoryParam, subcategoryParam) {
  return (dispatch, getState) =>
    new Promise((resolve) => {
      const props = {
        match: {
          params: {
            [Param.CATEGORY]: categoryParam,
            [Param.SUBCATEGORY]: subcategoryParam,
          },
        },
      };
      const videos = getVideosSubcategory(getState(), props); // array

      if (isEmpty(videos)) {
        dispatch(getSubcategoriesIfNeed(categoryParam))
          .then((categories) => {
            const subcategoryObj = categories[subcategoryParam];
            const uri = subcategoryObj.metadata.connections.videos.uri;
            // #todo сделать шаблон ключа
            const key = `${categoryParam}|${subcategoryParam}`;
            return dispatch(loadPlaylist(uri, key));
          })
          .then(itemsByKey => resolve(itemsByKey));
      } else {
        resolve(videos);
      }
    });
}

// export function getPlaylistIfNeed(categoryParam, subcategoryParam) {
//   return (dispatch, getState) => {
//
//     const { subcategories } = getState();
//     const subcategoriesByKey = subcategories[keyCat];
//
//     if (isEmpty(subcategoriesByKey)) {
//       dispatch(getSubcategoriesIfNeed(keyCat))
//         .then((items) => {
//           getVideos(items, keyCat, keySubcat, dispatch);
//         });
//     } else {
//       getVideos(subcategoriesByKey.itemsByKey, keyCat, keySubcat, dispatch);
//     }
//   };
//
//   function getVideos(subcategories, keyCat, keySubcat, dispatch) {
//     const key = `${keyCat}|${keySubcat}`;
//     const subcategory = subcategories[keySubcat];
//     const uri = subcategory.metadata.connections.videos.uri;
//     dispatch(loadPlaylist(key, uri));
//   }
// }

function loadPlaylist(uri, key) {
  return (dispatch, getState) =>
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
