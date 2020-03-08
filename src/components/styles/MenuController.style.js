import { theme } from './Theme.style';

const { custom } = theme;

export default {
    root: {
        cursor: 'pointer',
        '& span': {
            display: 'block',
            width: '33px',
            height: '4px',
            marginBottom: '5px',
            position: 'relative',
            background: '#cdcdcd',
            borderRadius: '3px',            
            zIndex: 1,
            transformOrigin: '4px 0px',            
            transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease'
        }
    },
    menuOpen: {
        outline: '1px solid red'
    }
}