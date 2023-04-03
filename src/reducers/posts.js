/* eslint-disable import/no-anonymous-default-export */

//A reducer is a function, accepts the state, here posts and action. Based on action type, we provide some logic. Our posts are gonna be array , so we set initail state to array
import { FETCH_ALL, CREATE, UPDATE, LIKE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id) ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}