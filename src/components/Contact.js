import React from 'react';
import { connect } from 'react-redux';
// Components
import Hero from './Hero';
import SplitPanel from './SplitPanel';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from './styles/Theme.style';

const useStyles = makeStyles({
    link: {
        fontWeight: 800,
        textDecoration: 'none',
        color: theme.custom.primary,
        '&:hover': {
            cursor: 'pointer'
        }
    },
  });

const Contact = () => {
    const heroProps = {
        customStyles: {
            backgroundColor: '#96ECFC',
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/contact.jpg)`,
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }
    }
    const classes = useStyles();
    const panelText = (
        <p>If you wish to get in touch you can contact me via email <a href="mailto:mike@maliniak.io" target="blank" className={classes.link}>here</a></p>
    )
    return (
        <div>
            <Hero {...heroProps} mainTitle={"Contact"}/>
            <SplitPanel 
                panelContentLeft={panelText}
                title="Get in touch..."
            />
        </div>
    )
}

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps
)(Contact);