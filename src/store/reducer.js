import * as actionTypes from './constants';

const initialState = {
    users: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_SUCCESS:
          return Object.assign({}, state, {users: action.users });
        case actionTypes.GET_USERS_FAIL:
          return Object.assign({}, state, { error: action.error });
        case actionTypes.DELETE_USER_FAIL:
          return Object.assign({}, state, { error: action.error });
        default: return state;
    }
}

export default reducer