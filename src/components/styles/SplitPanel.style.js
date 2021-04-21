import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default {
    wrapper: {},
    SplitPanelOuterLeft: {
        display: 'flex',
        boxSizing: 'border-box',
        padding: '2rem 1.5rem',
        [breakpoints.up('md')]: {
            justifyContent: 'flex-end',
            padding: '8rem 1.5rem',
        }
    },
    SplitPanelInnerLeft: {
        display: 'flex',
        alignItems: 'center',
        [breakpoints.up('md')]: {
            '& div': {
                paddingRight: '2rem'
            }
        },
        '& h2': {
            position: 'relative'
        },
        '& h2:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: '-1.25rem',
            left: 0,
            width: '1.5rem',
            height: '0.25rem',
            backgroundColor: custom.primary
        }
    },
    SplitPanelOuterRight: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            width: '80%',
            margin: '0 auto'
        }
    }
}