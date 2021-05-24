import { theme } from './Theme.style';

const { custom } = theme;

export default {

    root: {
        display: 'block',
        boxSizing: 'border-box',
        backgroundColor: custom.white,
        border: `1px solid ${custom.grey}`,
        borderRadius: '5px',
        padding: '5px',
        paddingBottom: '10px',
        width: '100%',
        maxWidth: '600px',
        textDecoration: 'none',
        color: custom.black,
        "& h5": {
            color: custom.primary
        }
    },
    
    imgContainer: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/skills3.jpeg'})`,
        backgroundSize: 'cover',
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
    },

    imgDiv: {
        color: custom.white,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transition: 'background-color 0.5s ease',
        '& span': {
            color: 'rgba(255, 255, 255, 1)'
        },
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }
    }
}