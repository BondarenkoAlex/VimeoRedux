/* eslint-disable no-use-before-define,import/prefer-default-export */
import { normalize } from 'normalizr';
import {
  VIDEO_GET_FAILURE,
  VIDEO_GET_REQUEST,
  VIDEO_GET_SUCCESS,
} from '../constants/video';
import {
  USER_GET_SUCCESS,
} from '../constants/user';
import { videoSchema } from '../normalize';
import fetchService from '../utils/fetchService';
import { getVideo } from '../selectors';
import { getCategory, getIdVideo } from '../utils/getParams';
import { isEmpty } from '../utils/check';
import { getSubcategoriesIfNeed } from './subcategoriesActions';
import { actionCreator } from './actionCreator';

export function getVideoIfNeed(params) {
  return async (dispatch, getState) => {
    // new Promise((resolve, reject) => {
    // const { categories: { itemsByKey } } = getState();

    const categoryParam = getCategory(params);
    if (!isEmpty(categoryParam)) {
      await dispatch(getSubcategoriesIfNeed(params));
      dispatch(loadVideo(params));
    } else {
      dispatch(loadVideo(params));
    }
  };
}

function loadVideo(params) {
  return (dispatch, getState) => {
    // new Promise((resolve) => {
    const video = getVideo(getState(), params);
    const idVideo = getIdVideo(params);
    if (isEmpty(video)) {
      dispatch(actionCreator(VIDEO_GET_REQUEST));
      fetchService.get(`/videos/${idVideo}`).then(
        data => {
          const normalizedData = normalize(data, videoSchema);
          const { videos, users } = normalizedData.entities;
          dispatch(actionCreator(VIDEO_GET_SUCCESS, videos));
          dispatch(actionCreator(USER_GET_SUCCESS, users));
        },

        error => {
          dispatch(actionCreator(VIDEO_GET_FAILURE, error));
        },
      );
    }
    // });
  };
}
