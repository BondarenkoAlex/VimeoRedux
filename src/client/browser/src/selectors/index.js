import { createSelector } from 'reselect';
import { Param } from '../constants/common';

export const getCategoryParam = (_, props) => props.match.params[Param.CATEGORY];
export const getSubcategoryParam = (_, props) => props.match.params[Param.SUBCATEGORY];
export const getIdVideoParam = (_, props) => props.match.params[Param.ID_VIDEO];

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
    [getPlaylistsState, getVideosState, getCategoryParam, getSubcategoryParam],
    (playlistsState, videosState, categoryParam, subcategoryParam) => {
      const key = `${categoryParam}|${subcategoryParam}`;
      const playlistSubcategory = playlistsState.itemsByKey[key];
      const playlistKeys = (playlistSubcategory && playlistSubcategory.items) || [];
      return playlistKeys.map(k => videosState[k]);
    },
);
