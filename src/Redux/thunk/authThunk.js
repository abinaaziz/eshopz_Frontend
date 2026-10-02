
import axios from "axios";

import {
    loginRequest,
    loginSuccess,
    loginFail,
    registerRequest,
    registerSuccess,
    registerFail
} from "../actions/authActions";


export const loginUser = (userData) => {
    return async (dispatch) => {

        dispatch(loginRequest());  //This is a Redux Thunk.Normally Redux actions are just objects:

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/accounts/login/",
                userData
            );

            localStorage.setItem(
                "token",
                response.data.access
            );

            localStorage.setItem(
                "refresh",
                response.data.refresh
            );

            dispatch(loginSuccess(response.data));

            return {
                type: "LOGIN_SUCCESS",
                payload: response.data
            };

        } catch (error) {

            const errorMessage =
                error.response?.data ||
                "Login Failed";

            dispatch(loginFail(errorMessage));

            return {
                type: "LOGIN_FAIL",
                payload: errorMessage
            };
        }
    };
};


export const registerUser = (userData) => {
    return async (dispatch) => {

        dispatch(registerRequest());

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/accounts/register/",
                userData
            );

            dispatch(registerSuccess(response.data));

            return {
                type: "REGISTER_SUCCESS",
                payload: response.data
            };

        } catch (error) {

            const errorMessage =
                error.response?.data ||
                "Registration Failed";

            dispatch(registerFail(errorMessage));

            return {
                type: "REGISTER_FAIL",
                payload: errorMessage
            };
        }
    };
};