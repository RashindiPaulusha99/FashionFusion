import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid transparent',
    boxShadow: 24,
    p: 4,
};

const DeletePopUp=(props)=>{

    return(
        <Modal
            open={props.open}
            onClose={props.handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are sure you want to delete ?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    If you click the Yes button, it will be deleted permanently!
                </Typography>
                <div style={{marginTop:12,display:'flex',justifyContent : 'center'}}>
                    <Button variant="text" color="info" onClick={props.deleteUser}>Yes</Button>
                    <Button variant="text" color="error" onClick={props.handleCloseModal}>No</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default DeletePopUp;