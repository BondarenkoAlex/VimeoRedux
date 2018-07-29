/* eslint-disable no-use-before-define */
import { CHANGE_IS_MOBILE, CHANGE_RESOLUTION } from '../constants/common';

function changeIsMobile(isMobile) {
  return {
    type: CHANGE_IS_MOBILE,
    isMobile,
  };
}

function changeResolution(width, height) {
  return {
    type: CHANGE_RESOLUTION,
    payload: {
      width,
      height,
    },
  };
}

export function initEnvironmentAction() {
  return dispatch => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);

    dispatch(changeIsMobile(isMobile));
    dispatch(resolutionAction());
  };
}

export function resolutionAction() {
  return dispatch => {
    dispatch(changeResolution(getHeight(), getWidth()));
  };
}

function getWidth() {
  let width = null;
  if (window.screen !== null) {
    width = window.screen.availWidth;
  }

  if (window.innerWidth !== null) {
    width = window.innerWidth;
  }

  if (document.body !== null) {
    width = document.body.clientWidth;
  }

  return width;
}

function getHeight() {
  let height = null;
  if (window.screen !== null) {
    height = window.screen.availHeight;
  }

  if (window.innerHeight !== null) {
    height = window.innerHeight;
  }

  if (document.body !== null) {
    height = document.body.clientHeight;
  }

  return height;
}
