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
            [breakpoints.up('md')]: {
                width: '40%',
                minWidth: '40%'
            }
        },
    
        imgDiv: {
            display: 'flex',
            justifyContent: 'center',
            [breakpoints.up('md')]: {
                justifyContent: 'flex-start',
            }
        },

        img: {
            width: '50%',
            [breakpoints.up('md')]: {
                width: '100%',
            }
        },
    
        contentDiv: {
            
        },

        title: {
            textTransform: 'capitalize'
        }
    })
}