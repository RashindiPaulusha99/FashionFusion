import React,{useState,useEffect} from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HomeService from "../../../../Services/HomeService";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TableCell, IconButton,} from '@mui/material';
import SnackBar from "../../../common/alert/SnackBar";
import AddIcon from "@mui/icons-material/Add";
import Chip from '@mui/material/Chip';
import DeletePopUp from "../../../common/model/DeletePopUp";

const UserBody=()=>{

    const [userId, setUserId] = useState('');
    const [rows, setRows] = useState([]);
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');

    const [open, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const handleClick = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Full name', width: 250 },
        { field: 'email', headerName: 'Email', width: 250 },
        {field: 'role', headerName: 'Role', width: 200,renderCell: (params) => (
                <TableCell>
                    <Chip label={params.row.role} color={params.row.role === "USER" ? "primary" : params.row.role === "ADMIN" ? "success" : "warning"} style={{height:29,opacity:0.720}}/>
                </TableCell>
            )},
        {field: 'addedDate', headerName: 'Added date', width: 200,},
        {field: 'action', headerName: 'Action', width: 200,sortable: false,renderCell: (params) => (
                <TableCell>
                    <IconButton aria-label="Edit" style={{backgroundColor:'#ffcccc'}} onClick={() => handleDelete(params.row.userId)}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </TableCell>
            )}
    ];

    const handleDelete =(userId) => {
        setUserId(userId)
        setOpen(true)
    };

    const deleteUser=async ()=>{
        setOpen(false)
        const response = await HomeService.deleteUser(userId);
        if (response.status === 200){
            handleGetUsers();
            setSeverity("success")
            setMessage("Successfully Deleted!")
            handleClick()
        }
    }

    useEffect(()=>{
        handleGetUsers()
    },[])

    const handleGetUsers=async ()=>{
        try {
            const response = await HomeService.getAllUser();
            const newRows = response.data.map((dataKey,index) => ({
                userId:dataKey._id,
                id: index + 1,
                name: dataKey.name,
                email: dataKey.email,
                role: dataKey.role,
                addedDate: dataKey.addedDate
            }));
            setRows(newRows);
        } catch (error) {
            // Handle error if necessary
        }
    }

    return(
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} className='mt-5' style={{display:'flex',justifyContent:'flex-start'}}>
                    <Typography variant="h5" gutterBottom>Users</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className='mt-2 mb-4'>
                    <div style={{ height: 450, width: '100%',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                </Grid>

            </Grid>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
            <DeletePopUp open={open} handleCloseModal={handleCloseModal} deleteUser={deleteUser}/>
        </Box>
    )
}
export default UserBody;