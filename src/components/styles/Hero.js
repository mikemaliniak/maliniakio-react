import Background from './img/home.jpg';
import { colors as c } from './_variables';

export default {

    root: {
        backgroundColor: 'coral'
    },

    root: {
        height: '80vh',
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },

    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        height: '100%',
        width: '100',
        backgroundColor: c.$black,
        opacity: '0.7'
    },
    
    title: {
        textTransform: 'uppercase',
        color: c.$white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: '2'
    },

    titleMain: {
        fontWeight: 800,
        fontSize: '8rem',
        letterSpacing: '1rem'
    },

    titleSub: {
        fontWeight: 100,
        fontSize: '1.5rem'
    },
}