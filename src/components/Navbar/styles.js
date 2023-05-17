import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: '0 0 10px 10px',
        margin: '0 0 60px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '120%'
        }
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '70%',
            marginLeft: '5px'
        }
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    icon: {
        paddingLeft: '10px',
    },
    logout: {
        width: '25%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '70%'
        }
    }
}));