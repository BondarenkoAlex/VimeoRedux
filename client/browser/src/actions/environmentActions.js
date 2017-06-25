import { CHANGE_IS_MOBILE } from '../constants';

function changeIsMobile(isMobile) {
  return {
    type: CHANGE_IS_MOBILE,
    isMobile,
  };
}

export function initEnvironment() {
  return dispatch => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);

    dispatch(changeIsMobile(isMobile));
  };
}

