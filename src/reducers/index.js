import { combineReducers } from "redux";
import posts from './posts'
import auth from './auth'

export default combineReducers({ posts, auth });
//In here we can mention all the indivvidual reducers that we have
//as key and value names are same. value is the name of reducer function