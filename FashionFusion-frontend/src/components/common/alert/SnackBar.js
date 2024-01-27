import React, {useState} from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const SnackBar=(props)=>{

    const [vertical, setVertical ]= useState('top');
    const [horizontal, setHorizontal] = useState('right');

    return(
        <Snackbar open={props.state} autoHideDuration={6000} onClose={props.handleClose} anchorOrigin={{vertical, horizontal }} key={'top' + 'right'}>
            <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}

export default SnackBar;