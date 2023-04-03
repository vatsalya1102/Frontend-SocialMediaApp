import React, { useEffect } from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles'

const Posts = ({ setCurrentId, currentId }) => {
    const classes = useStyles();

    //It takes in a function argument that returns the part of the state that you want
    const posts = useSelector((state) => state.posts);
    //state.posts because in index.js of reducers we are exporting posts
    

    useEffect(() => {
        console.log(posts);
    }, [currentId])
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;