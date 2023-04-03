import { FETCH_ALL, CREATE, UPDATE, LIKE, DELETE } from '../constants/actionTypes';
import * as api from '../api'

//Action Creators : function that return action. action is an object

//We use thunk, to use async logic, and with it we don't return, but dispatch
//Thunk defines async action creaters

//Thunk middleware gives ability to action creator to return a function instead an action object
//has dispatch method as argument
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data })
        console.log('Hello');
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: LIKE, payload: data })
    } catch (error) {
        console.log(error);
    }
}