import React from 'react';
import BlankPanel from './BlankPanel';
import Hero from './Hero';
import skills from '../data/skillset';
import { withStyles } from '@material-ui/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import styles from './styles/Skills.style';

const Skills = (props) => {
        const { classes } = props;
        const inlineStyles = {
            backgroundColor: '#0169CA',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/skills.jpg'})`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }
        return (
            <div className={classes.root}>
                <Hero customStyles={inlineStyles} mainTitle={"Skills"}/>
                <BlankPanel>
                    <div>
                        <p className={classes.skillListSub}>Some but not all of the languages, programs, frameworks, libraries, build-tools and methodologies that I either use day to day or have experience with:</p>
                        <ul className={classes.skillList}>
                        {
                            skills.map(skill => (
                                <li className={classes.skillListItem}>
                                    <span className={classes.skillListIcon}><CheckCircleIcon /></span>
                                    <span className={classes.skillListMain}>{skill.skill}:
                                    </span>
                                    <span className={classes.skillListDesc}>{skill.desc}</span>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </BlankPanel>
            </ div>
        );
}

export default withStyles(styles)(Skills);