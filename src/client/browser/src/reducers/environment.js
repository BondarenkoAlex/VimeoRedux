import { CHANGE_IS_MOBILE, CHANGE_RESOLUTION } from '../constants';

const initialState = {
  isMobile: false,
  resolution: {},
};

export default function environment(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IS_MOBILE: {
      return {
        ...state,
        isMobile: action.isMobile,
      };
    }

    case CHANGE_RESOLUTION: {
      return {
        ...state,
        resolution: action.payload,
      };
    }

    default:
      return state;
  }
}
