import axios from 'axios'
//requests to an API endpoint

// const API = axios.create({ baseURL: 'http://localhost:5000' })

// const url = 'https://socialmedia-backend-yxsk.onrender.com/posts';

const API = axios.create({ baseURL: 'https://socialmedia-backend-yxsk.onrender.com' })

API.interceptors.request.use((req) => {
     if(localStorage.getItem('profile')){
          req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
     }

     return req;
})

export const fetchPosts = () => {
     return API.get('/posts');
}

//Parameter is the new post
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);