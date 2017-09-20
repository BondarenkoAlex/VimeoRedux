import { createSelector } from 'reselect';
import {
  PARAM,
  PARAM_QUERY,
  EMPTY_OBJECT,
} from '../constants/common';
import { buildKeyVideoStore } from '../utils/helpers';
import {
  getCategory,
  getSubcategory,
  getIdVideo,
  getDuration,
  getPeriod,
  getShowby,
} from '../utils/getParams';

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
  (playlistsState,
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
