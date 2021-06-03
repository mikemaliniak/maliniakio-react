import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default (name) => {
    return ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            color: custom.black,
            marginBottom: '4rem',
            [breakpoints.up('md')]: {
                flexDirection: 'row',
            }
        },
        
        imgContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            [breakpoints.up('md')]: {
                width: '40%',
                minWidth: '40%',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }
        },

        img: {
            width: '50%',
            [breakpoints.up('md')]: {
                width: '100%',
            }
        },
    
        textContainer: {
            [breakpoints.up('md')]: {
                paddingLeft: '2rem',
            }
        },

        title: {
            textTransform: 'capitalize'
        }
    })
}