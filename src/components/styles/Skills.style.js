import { theme } from './Theme.style';

const { custom } = theme;

export default {

    root: {

    },
    text: {
        fontWeight: 200,
        textAlign: "center",
    },
    skillList: {
        listStyleType: 'none',
        paddingLeft: 0,
        margin: '0 auto',
        maxWidth: '800px'
    },
    skillListSub: {
        marginBottom: '3rem',
        margin: '0 auto',
        maxWidth: '800px'
    },
    skillListItem: {
        position: "relative",
        paddingTop: '1px',
        paddingLeft: '30px',
        marginBottom: '25px',
        lineHeight: 1.2
    },
    skillListIcon: {
        position: "absolute",
        top: 0,
        left: 0,
        "& svg": {
            height: '20px',
            color: custom.primary
        }
    },
    skillListMain: {
        fontWeight: 800,
        marginRight: '5px'
    },
    skillListDesc: {
        fontSize: '14px',
        color: custom.grey2
    }
}