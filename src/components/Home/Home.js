import React from 'react'
import { Grow, Grid, Container } from '@material-ui/core'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch(); //we need way to where we dispatch. so we use useeffect

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home