import { CHANGE_IS_MOBILE } from '../constants';

const initialState = {
  isMobile: false,
};

export default function environment(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IS_MOBILE: {
      return {
        ...state,
        isMobile: action.isMobile,
      };
    }

    default:
      return state;
  }
}
