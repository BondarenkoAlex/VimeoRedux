import { createSelector } from 'reselect';

export const getCategoryParam = (_, params) => params.category;
export const getSubcategoryParam = (_, params) => params.subcategory;
export const getIdVideoParam = (_, params) => params.idVideo;

export const getCategoriesState = state => state.categories;
export const getSubcategoriesState = state => state.subcategories;

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

// export const makeGetSubcategoryByCategoryParam = () => createSelector(
//   [getSubcategoriesState, getCategoryParam],
//   (subcategoriesState, categoryParam) => subcategoriesState[categoryParam],
// );
