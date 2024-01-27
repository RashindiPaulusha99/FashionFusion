import React, {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {IconButton, TableCell} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import HomeService from "../../../../Services/HomeService";
import SnackBar from "../../../common/alert/SnackBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeletePopUp from "../../../common/model/DeletePopUp";
import Slide from "@mui/material/Slide";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryBody=()=>{

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('');
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    useEffect(()=>{
        fetchDetails();
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchCategory();

        if (response.status === 200){
            const reversedData = response.data.reverse();
            setPosts(reversedData);
        }
    }

    const handleClick = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    const handleCloseOpen = () => {
        setOpenAdd(false);
    };

    const handleClickOpen =async () => {
        setOpenAdd(true);
    };

    const handleCloseOpenEdit = () => {
        setOpenEdit(false);
    };

    const handleClickOpenEdit =async () => {
        setOpenEdit(true);
    };

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const handleEditCategory=async (id)=>{
        setOpenEdit(true)
        setId(id);
    }

    const handleDeleteCategory=async (id)=>{
        setOpen(true)
        setId(id);
    }

    const deleteUser=async ()=>{
        setOpen(false)
        const response = await HomeService.deleteCategory(id);
        if (response.status === 200){
            fetchDetails();
            setSeverity("success")
            setMessage("Successfully Deleted!")
            handleClick()
        }
    }

    return(
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6} md={6} className='mt-5 mb-4' style={{display:'flex',justifyContent:'flex-start'}}>
                    <Typography variant="h5" gutterBottom>Categories</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} className='mt-5 mb-3' style={{display:'flex',justifyContent:'flex-end'}}>
                    <Button variant="contained" size="medium" style={{backgroundColor:'black'}} startIcon={<AddIcon />} onClick={handleClickOpen}>
                        new category
                    </Button>
                </Grid>
                {posts.map(({_id,category,image}, index) =>(
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{
                            py: 5,
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            textAlign: 'center',
                            borderRadius:'7%',}}>
                            <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} style={{margin: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                width: 56,
                                height: 94,
                                justifyContent: 'center',
                                marginTop: 10,
                                paddingTop:35,
                                marginBottom: 25}} alt='categories'/>
                            <Typography variant="h5" sx={{ paddingBottom: 3 }}>{category}</Typography>
                            <IconButton  size="small" aria-label="edit" onClick={()=>{
                                handleEditCategory(_id)
                            }} className='mb-3 me-2' style={{backgroundColor:'ghostwhite',}}>
                                <EditIcon />
                            </IconButton>
                            <IconButton  size="small" onClick={()=>{
                                handleDeleteCategory(_id)
                            }} aria-label="edit" className='mb-3 me-2' style={{backgroundColor:'ghostwhite',}}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
            <DeletePopUp open={open} handleCloseModal={handleCloseModal} deleteUser={deleteUser}/>
            {openAdd ? <AddCategoryModal openAdd={openAdd} handleClickOpen={handleClickOpen} handleCloseOpen={handleCloseOpen} Transition={Transition} fetchDetails={fetchDetails}/> : null}
            {openEdit ? <EditCategoryModal openEdit={openEdit} handleClickOpenEdit={handleClickOpenEdit} handleCloseOpenEdit={handleCloseOpenEdit} Transition={Transition} fetchDetails={fetchDetails} id={id}/> : null}
        </Box>
    )
}

export default CategoryBody;