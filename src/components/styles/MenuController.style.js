import { theme } from './Theme.style';

const { custom } = theme;

export default {
    root: {
        cursor: 'pointer',
        '& span': {
            display: 'block',
            width: '28px',
            height: '4px',
            marginBottom: '5px',
            position: 'relative',
            background: custom.black,    
            transformOrigin: '4px 0px',            
            transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease',

            '&:first-child': {
                transformOrigin: '0% 0%'
            },

            '&:nth-last-child(2)': {
                transformOrigin: '0% 100%'
            }
        },

        '& svg': {
            color: custom.primary
        },

        '&:hover span':   {
            background: custom.primary
        }
    },
    menuOpen: {
        '& span': {
            '&:first-child': {
                transform: 'rotate(45deg) translate(0, -3px)'
            }, 

            '&:nth-last-child(2)': {
                opacity: 0,
                transform: 'rotate(0deg) scale(0.2, 0.2)' 
            },

            '&:last-of-type': {
                transform: 'rotate(-45deg) translate(0, -4px)'
            }
        },
    }
}