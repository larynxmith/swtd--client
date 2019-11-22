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
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
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
                                            <FormLabel component="legend">Gender</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                <FormControlLabel
                                                    value="disabled"
                                                    disabled
                                                    control={<Radio />}
                                                    label="(Disabled option)"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormLabel component="legend">Gender</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChange}>
                                                <FormControlLabel
                                                    value="female"
                                                    control={<Radio color="primary" />}
                                                    label="Female"
                                                    labelPlacement="start"
                                                />
                                                <FormControlLabel
                                                    value="male"
                                                    control={<Radio color="primary" />}
                                                    label="Male"
                                                    labelPlacement="start"
                                                />
                                                <FormControlLabel
                                                    value="other"
                                                    control={<Radio color="primary" />}
                                                    label="Other"
                                                    labelPlacement="start"
                                                />
                                                <FormControlLabel
                                                    value="disabled"
                                                    disabled
                                                    control={<Radio />}
                                                    label="(Disabled option)"
                                                    labelPlacement="start"
                                                />
                                            </RadioGroup>
                                            <FormHelperText>labelPlacement start</FormHelperText>
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