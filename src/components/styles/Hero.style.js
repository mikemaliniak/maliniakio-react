import { theme } from './Theme.style';

const { breakpoints } = theme;

export default {

    root: {
        height: '30vh',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        [breakpoints.up('sm')]: {
            height: '40vh'
        },
        [breakpoints.up('md')]: {
            height: '80vh'
        }
    },
    reduceSize: {
        [breakpoints.up('sm')]: {
            height: '25vh'
        },
        [breakpoints.up('md')]: {
            height: '30vh'
        }
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        height: '100%',
        width: '100',
        // backgroundColor: '#333',
        opacity: '0.7'
    },
    
    title: {
        textTransform: 'uppercase',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: '2',
        textShadow: '1px 1px #222'
    },

    titleMain: {
        fontWeight: 800,
        fontSize: '3rem',
        letterSpacing: '1rem',
        [breakpoints.up('sm')]: {
            fontSize: '5rem'
        },
        [breakpoints.up('md')]: {
            fontSize: '8rem'
        }
    },

    titleSub: {
        fontWeight: 100,
        fontSize: '1.5rem'
    },
}