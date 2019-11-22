import axios from 'axios';
import BASE_URL from '../../constants';
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MomentUtils from '@date-io/moment'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers'


const NewItem = (props) => {

    const [open, setOpen] = React.useState(false)

    const [values, setValues] = React.useState({
        question: '',
        correctAnswer: '',
        incorrectAnswer1: '',
        incorrectAnswer2: '',
        incorrectAnswer3: '',
        userId: props.user._id
    });

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(false)
        let token = localStorage.getItem('mernToken')
        console.log('values: ', values)
        axios.post(`${BASE_URL}/questions`,
            {
                question: values.question,
                correctAnswer: values.correctAnswer,
                incorrectAnswer1: values.incorrectAnswer1,
                incorrectAnswer2: values.incorrectAnswer2,
                incorrectAnswer3: values.incorrectAnswer3
            },
            {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(response => {
                console.log('ITEM ADDED', response)
                props.getItems()
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (name, e, d) => {
        console.log(e)
        console.log(name)
        console.log(d)
        if (e.target) {
            setValues({ ...values, [name]: e.target.value })
        }
        else if (name === 'lastChanged' || name === 'nextChanged') {
            setValues({ ...values, [name]: d })
        }
    }



    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create a ThrowDown
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a Question!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill out the Fields Below:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="question"
                        label="What's the Question?"
                        type="text"
                        fullWidth
                        value={values.question}
                        onChange={e => handleChange('question', e)}
                    />
                    <TextField
                        margin="dense"
                        id="correctAnswer"
                        label="Enter the CORRECT Answer"
                        type="text"
                        fullWidth
                        value={values.correctAnswer}
                        onChange={e => handleChange('correctAnswer', e)}
                    /><TextField
                        margin="dense"
                        id="incorrectAnswer1"
                        label="Enter an Incorrect Answer"
                        type="text"
                        fullWidth
                        value={values.incorrectAnswer1}
                        onChange={e => handleChange('incorrectAnswer1', e)}
                    /><TextField
                        margin="dense"
                        id="incorrectAnswer2"
                        label="Enter Another Incorrect Answer"
                        type="text"
                        fullWidth
                        value={values.incorrectAnswer2}
                        onChange={e => handleChange('incorrectAnswer2', e)}
                    /><TextField
                        margin="dense"
                        id="incorrectAnswer3"
                        label="Enter a Third Incorrect Answer"
                        type="text"
                        fullWidth
                        value={values.incorrectAnswer3}
                        onChange={e => handleChange('incorrectAnswer3', e)}
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add ThrowDown
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default NewItem