
// These are action creators.

// redux/actions/authActions.js

import {
LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAIL,
REGISTER_REQUEST,
REGISTER_SUCCESS,
REGISTER_FAIL,
LOGOUT
} from "../constants/authTypes";


export const loginRequest = () => ({
    type: LOGIN_REQUEST
});


export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data  //payload is basically the data being carried by the action.
});


export const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error
});


export const registerRequest = () => ({
    type: REGISTER_REQUEST
});


export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});


export const registerFail = (error) => ({
    type: REGISTER_FAIL,
    payload: error
});


export const logout = () => ({
    type: LOGOUT
});