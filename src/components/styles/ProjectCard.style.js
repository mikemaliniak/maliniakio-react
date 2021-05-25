import { theme } from './Theme.style';

const { custom } = theme;

export default (name) => {
    return ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            color: custom.black,
        },
        
        imgContainer: {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${name}.jpg)`,
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
        },
    
        contentDiv: {
            
        }
    })
}