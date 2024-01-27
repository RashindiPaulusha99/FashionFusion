import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HomeService from "../../../Services/HomeService";

const DeleteModal=(props)=>{
    const { onClose, open,id,handleCart } = props;

    const [Id,setId]=useState('')

    const handleClose = () => {
        onClose(open);
    };

    useEffect(()=>{
        setId(id)
    })

    const handleDeleteItem=async ()=>{
        const response = await HomeService.deleteCart(Id)

        if (response.status === 200){
            props.handleCart();
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Remove from cart"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want tot remove this item?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>cancel</Button>
                <Button onClick={()=>{
                    handleDeleteItem();
                    handleClose();
                }} autoFocus color={"warning"}>
                    remove
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteModal;