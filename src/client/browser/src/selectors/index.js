import { createSelector } from 'reselect';
import {
  PARAM,
  PARAM_QUERY,
  EMPTY_OBJECT,
} from '../constants/common';
import { buildKeyVideoStore } from '../utils/helpers';
import { isEmpty } from '../utils/check';
import {
  getCategory,
  getSubcategory,
  getIdVideo,
  getDuration,
  getPeriod,
  getShowby,
} from '../utils/getParams';
import { ROOT_URI } from '../constants/config';
import { CATEGORIES_TITLE } from '../constants/common';

export const getCategoryParam = (_, params) => getCategory(params);
export const getSubcategoryParam = (_, params) => getSubcategory(params);
export const getIdVideoParam = (_, params) => getIdVideo(params);

// export const getParams = (_, props) => getParamsFromProps(props);
// export const getQuery = (_, props) => getQueryFromProps(props);
export const getDurationQuery = (_, obj) => getDuration(obj);
export const getPeriodQuery = (_, obj) => getPeriod(obj);
export const getShowbyQuery = (_, obj) => getShowby(obj);

export const getCategoriesState = state => state.categories;
export const getSubcategoriesState = state => state.subcategories;
export const getPlaylistsState = state => state.playlists;
export const getVideosState = state => state.videos;
// export const getUsersState = state => state.users;

export const getCategoryTitle = createSelector(
  [getCategoriesState, getCategoryParam],
  (categoriesState, categoryParam) => {
    const category = categoriesState.itemsByKey[categoryParam];
    return category && category.name; // undefined or name
  },
);

export const getSubcategoryByCategoryParam = createSelector(
  [getSubcategoriesState, getCategoryParam],
  (subcategoriesState, categoryParam) => subcategoriesState[categoryParam],
);

export const getSubcategoryTitle = createSelector(
  [getSubcategoriesState, getCategoryParam, getSubcategoryParam],
  (subcategoriesState, categoryParam, subcategoryParam) => {
    const category = subcategoriesState[categoryParam];
    const subcategory = category && category.itemsByKey[subcategoryParam];
    return subcategory && subcategory.name; // undefined or name
  },
);

export const getVideosSubcategory = createSelector(
  [
    getPlaylistsState,
    getVideosState,
    getCategoryParam,
    getSubcategoryParam,
    getDurationQuery,
    getPeriodQuery,
    getShowbyQuery,
  ],
  (
    playlistsState,
    videosState,
    categoryParam,
    subcategoryParam,
    duration,
    period,
    showby) => {
    const key = buildKeyVideoStore({
      [PARAM.CATEGORY]: categoryParam,
      [PARAM.SUBCATEGORY]: subcategoryParam,
      [PARAM_QUERY.DURATION]: duration,
      [PARAM_QUERY.PERIOD]: period,
      [PARAM_QUERY.SHOWBY]: showby,
    });
    const playlistSubcategory = playlistsState.itemsByKey[key];
    const playlistKeys = (playlistSubcategory && playlistSubcategory.items) || [];
    return playlistKeys.map(k => videosState.itemsByKey[k]);
  },
);

export const getVideo = createSelector(
  [getVideosState, getIdVideoParam],
  (videosState, idVideoParam) => {
    const video = videosState.itemsByKey[idVideoParam];
    return video || EMPTY_OBJECT; // video object or empty object
  },
);

// export const getUser = createSelector(
//   [getUsersState, getIdVideoParam],
//   (videosState, idVideoParam) => {
//     const video = videosState.itemsByKey[idVideoParam];
//     return video || EMPTY_OBJECT; // video object or empty object
//   },
// );

export const getBreadcrums = createSelector(
  [
    getCategoriesState,
    getSubcategoriesState,
    getCategoryParam,
    getSubcategoryParam,
    getIdVideoParam,
  ],
  (
    categoriesState,
    subcategoriesState,
    categoryParam,
    subcategoryParam,
    idVideoParam) => {
    const pathArray = [];
    const empty = null; // undefined;
    if (!isEmpty(categoryParam)) {
      pathArray.push({
        title: CATEGORIES_TITLE,
        uri: ROOT_URI,
      });
    }

    if (!isEmpty(subcategoryParam)) {
      const itemsByKey = categoriesState && categoriesState.itemsByKey;
      const category = itemsByKey && itemsByKey[categoryParam];
      if (isEmpty(category)) {
        return empty;
      }

      const title = category.name;
      const uri = category.uriLocal;
      pathArray.push({
        title,
        uri,
      });
    }

    if (!isEmpty(idVideoParam)) {
      const category = subcategoriesState && subcategoriesState[categoryParam];
      const itemsByKey = category && category.itemsByKey;
      const subcategory = itemsByKey && itemsByKey[subcategoryParam];
      if (isEmpty(subcategory)) {
        return empty;
      }

      const title = subcategory.name;
      const uri = subcategory.uriLocal;
      pathArray.push({
        title,
        uri,
      });
    }

    return isEmpty(pathArray)
      ? empty
      : pathArray;
  },
);
