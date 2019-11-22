import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import ItemSettings from './ItemSettings';
import UpdateItem from './UpdateItem';
import DeleteItem from './DeleteItem';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
        backgroundColor: 'lightblue',
        color: 'white',
    },
    column: {
        flexBasis: '33.33%',

    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    formControl: {
        margin: theme.spacing(3),
    }
}));

const ListPopulator = props => {
    console.log('updating correct answer : ', props.questions)
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = event => {

        setValue(event.target.value)
        console.log('value:', value)
        if(value===props.questions.correctAnswer){
            console.log("correctAnswer: ", props.questions.correctAnswer)
            props.questions.attempted = true
            props.quesitons.correctAttempt = true
        }
    };

    return (
        <div>
            {props.questions.map((question, i) => {
                return (
                    <div key={i}>
                        <div>
                            <div className={classes.root}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1c-content"
                                        id="panel1c-header"
                                    >
                                        <div className={classes.column}>
                                            <Typography className={classes.heading}>Question: {question.question}</Typography>
                                        </div>
                                        <div className={classes.column}>
                                            {/* <Typography className={classes.secondaryHeading}>Posted: <Moment fromNow unit="days">{item.nextChanged}</Moment></Typography> */}
                                        </div>
                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails className={classes.details}>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormLabel component="legend">Answers</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                <FormControlLabel value={props.questions[i].correctAnswer} control={<Radio />} label={props.questions[i].correctAnswer} />
                                                <FormControlLabel value={props.questions[i].incorrectAnswer1} control={<Radio />} label={props.questions[i].incorrectAnswer1} />
                                                <FormControlLabel value={props.questions[i].incorrectAnswer2} control={<Radio />} label={props.questions[i].incorrectAnswer2} />
                                                <FormControlLabel value={props.questions[i].incorrectAnswer3} control={<Radio />} label={props.questions[i].incorrectAnswer3} />
                                                
                                            </RadioGroup>
                                        </FormControl>
                                        
                                    </ExpansionPanelDetails>
                                    <Divider />
                                    <ExpansionPanelActions>
                                        <ItemSettings />
                                        {/* <Button size="small">Cancel</Button>
                                        <Button size="small" color="primary">
                                            Save
                                        </Button> */}
                                    </ExpansionPanelActions>
                                </ExpansionPanel>
                            </div>
                            <br />
                        </div>
                    </div>
                )
            })}
        </div>
    )


}


export default ListPopulator