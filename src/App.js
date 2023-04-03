import React, {useEffect, useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import socialmedia from './images/socialmedia.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

export default function App() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch(); //we need way to where we dispatch. so we use useeffect

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>The Social Media App</Typography>
                <img className={classes.image} src={socialmedia} alt='The Social Media App' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
