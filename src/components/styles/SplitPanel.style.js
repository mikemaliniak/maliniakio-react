import { theme } from './Theme.style';

const { custom, breakpoints } = theme;

export default {
    wrapper: {},
    SplitPanelOuterLeft: {
        display: 'flex',
        padding: '4rem 1.5rem',
        [breakpoints.up('md')]: {
            flexDirection: 'row-reverse'
        }
    },
    SplitPanelInnerLeft: {

    }
}