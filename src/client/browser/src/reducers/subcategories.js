import {
  SUBCATEGORIES_GET_REQUEST,
  SUBCATEGORIES_GET_SUCCESS,
  SUBCATEGORIES_GET_FAILURE,
} from '../constants/categories';

export default function categories(state = {}, action) {
  switch (action.type) {
    case SUBCATEGORIES_GET_REQUEST: {
      const stateSubcategory = merge(state[action.key],
        {
          isFetching: true,
        },
      );

      return {
        ...state,
        [action.key]: stateSubcategory,
      };
    }

    case SUBCATEGORIES_GET_SUCCESS: {
      const stateSubcategory = merge(state[action.key],
        {
          isFetching: false,
          error: null,
          itemsByKey: action.payload,
        },
      );

      return {
        ...state,
        [action.key]: stateSubcategory,
      };

      // return {
      //   ...state,
      //   isFetching: false,
      //   error: null,
      //   items: {
      //     ...state.items,
      //     ...action.payload,
      //   },
      // };
    }

    case SUBCATEGORIES_GET_FAILURE: {
      const stateSubcategory = merge(state[action.key],
        {
          isFetching: false,
          error: action.payload,
          itemsByKey: {},
        },
      );

      return {
        ...state,
        [action.key]: stateSubcategory,
      };

      // return {
      //   ...state,
      //   isFetching: false,
      //   error: action.payload,
      // };
    }

    default:
      return state;
  }
}

function merge(state = {}, props) {
  return {
    ...initialState,
    ...state,
    ...props,
  };
}

const initialState = {
  isFetching: false,
  error: null,
  itemsByKey: {},
};

// export default function categories(state = initialState, action) {
//   switch (action.type) {
//     case SUBCATEGORIES_GET_REQUEST: {
//       return {
//         ...state,
//         isFetching: true,
//       };
//     }
//
//     case SUBCATEGORIES_GET_SUCCESS: {
//       return {
//         ...state,
//         isFetching: false,
//         error: null,
//         items: {
//           ...state.items,
//           ...action.payload,
//         },
//       };
//     }
//
//     case SUBCATEGORIES_GET_FAILURE: {
//       return {
//         ...state,
//         isFetching: false,
//         error: action.payload,
//       };
//     }
//
//     default:
//       return state;
//   }
// }

