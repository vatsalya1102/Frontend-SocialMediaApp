import { combineReducers } from "redux";
import posts from './posts'

export default combineReducers({ posts });
//In here we can mention all the indivvidual reducers that we have
//as key and value names are same. value is the name of reducer function