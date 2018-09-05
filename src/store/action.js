import * as actionTypes from './constants';

export const getUsers = () => {
    return { type: actionTypes.GET_USERS};
};
  
export const getUsersSuccess = (response) => {
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        users: response.data
    };
};
  
export const getUsersFail = error => {
    return { type: actionTypes.GET_USERS_FAIL, error: error };
};

export const deleteUser = (id) => {
    return { type: actionTypes.DELETE_USER, id: id};
};

export const deleteUserFail = (error) => {
    return { type: actionTypes.DELETE_USER_FAIL, error: error};
};