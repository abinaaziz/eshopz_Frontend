// If you later add a cart reducer, product reducer, etc., they are combined here.

// redux/reducers/rootReducer.js
//A reducer is a function that manages a particular part of your Redux state.

//here only auth state ispresent. "Redux, use authReducer to manage the auth part of my state."

import { combineReducers } from "redux";

import authReducer from "./authReducer";


const rootReducer = combineReducers({

auth: authReducer

});


export default rootReducer;