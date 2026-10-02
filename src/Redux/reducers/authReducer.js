// The reducer updates the Redux state based on actions

// redux/reducers/authReducer.js

import {

LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAIL,

REGISTER_REQUEST,
REGISTER_SUCCESS,
REGISTER_FAIL,

LOGOUT

} from "../constants/authTypes";


const initialState = {

loading: false,

user: null,

token: null,

error: null

};


const authReducer = (state = initialState, action) => {

switch (action.type) {

case LOGIN_REQUEST:

return {

...state,

loading: true,

error: null

};


case LOGIN_SUCCESS:

return {

...state,

loading: false,

user: action.payload.user,

token: action.payload.access,

error: null

};


case LOGIN_FAIL:

return {

...state,

loading: false,

error: action.payload

};


case REGISTER_REQUEST:

return {

...state,

loading: true

};


case REGISTER_SUCCESS:

return {

...state,

loading: false

};


case REGISTER_FAIL:

return {

...state,

loading: false,

error: action.payload

};


case LOGOUT:

return initialState;


default:

return state;

}

};


export default authReducer;