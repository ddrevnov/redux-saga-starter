// import { getUsers } from '../../api/users';

const LOAD_USERS = 'users/LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'users/LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAIL = 'users/LOAD_USERS_FAIL';

const defaultState = {
  entities: [],
  loading: false,
  error: null,
};

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_USERS: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        entities: action.result,
      };
    }
    case LOAD_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        entities: [],
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

export function loadUsers() {
  return {
    type: LOAD_USERS,
  };
}

// export function loadUsers() {
//   return {
//     types: [
//       LOAD_USERS,
//       LOAD_USERS_SUCCESS,
//       LOAD_USERS_FAIL,
//     ],
//     promise: getUsers(),
//   };
// }
