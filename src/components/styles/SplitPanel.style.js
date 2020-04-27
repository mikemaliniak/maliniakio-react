import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default {
    wrapper: {},
    SplitPanelOuterLeft: {
        display: 'flex',
        padding: '2rem 1.5rem',
        [breakpoints.up('md')]: {
            justifyContent: 'flex-end',
            padding: '8rem 1.5rem',
        }
    },
    SplitPanelInnerLeft: {

    }
}