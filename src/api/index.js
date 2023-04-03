import axios from 'axios'
//requests to an API endpoint

const url = 'https://socialmedia-backend-yxsk.onrender.com/posts';

export const fetchPosts = () => {
     return axios.get(url);
}

//Parameter is the new post
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);