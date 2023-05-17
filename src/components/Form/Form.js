import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        tags: '',
        selectedFile: ''
    })
    const classes = useStyles();

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId) {
             await dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
        }
        else {
            dispatch(createPost({...postData, name: user?.result?.name}));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            title: '',
            description: '',
            tags: '',
            selectedFile: ''
        })
    }

    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography variant='h6' align="center">
                    Please sign in to reate your own posts and like other's posts.
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'Create a post:'}</Typography>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name='description' variant='outlined' label='Description' fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' fullWidth size='large' type='submit'>Post</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form;