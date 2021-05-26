import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default (name) => {
    return ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            color: custom.black,
            [breakpoints.up('md')]: {
                flexDirection: 'row',
            }
        },
        
        imgContainer: {
            width: '100%',
            [breakpoints.up('md')]: {
                width: '40%',
            }
        },
    
        imgDiv: {
        },

        img: {
            width: '100%'
        },
    
        contentDiv: {
            
        },

        title: {
            textTransform: 'capitalize'
        }
    })
}