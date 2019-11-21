import axios from 'axios';
import BASE_URL from '../../constants';
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const DeleteItem = (props) => {

    const [open, setOpen] = React.useState(false)
    const [redirect, setRedirect] = useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleCancel() {
        setOpen(false)
        setRedirect(false)
    }

    function handleClose() {
        setOpen(false)
        setRedirect(true)

    }

    const handleDelete = () => {
        let token = localStorage.getItem('mernToken')
        console.log(token)
        axios.delete(`${BASE_URL}/listItems/${props.item._id}`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        )

            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        handleClose()
        console.log('ITEM DELETED')
    }

    if (redirect === true) {
        return (
            <Redirect to='/' />
        )
    } else {
        return (
            <div>
                <Button color="primary" onClick={handleClickOpen}>
                    <DeleteTwoToneIcon />
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Have You Finally Remembered?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you Really, REALLY Sure You Want to Delete This ...?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                            No, I'd Like to Keep Forgetting
                        </Button>
                        <Button onClick={handleDelete} color="primary" autoFocus>
                            Yes, Please Remove This Forget-fill
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default DeleteItem