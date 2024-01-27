import React, {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import HomeService from "../../../../Services/HomeService";
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import DeletePopUp from "../../../common/model/DeletePopUp";
import SnackBar from "../../../common/alert/SnackBar";
import AddBrandModal from "./AddBrandModal";
import Slide from "@mui/material/Slide";
import EditBrandModal from "./EditBrandMondal";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BrandBody=()=>{

    const [id, setId] = useState('');
    const [posts, setPosts] = useState([]);
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

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

    useEffect(()=>{
        fetchDetails();
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchBrand();

        if (response.status === 200){
            const reversedData = response.data.reverse();
            setPosts(reversedData);
        }
    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const handleEditBrand=async (id)=>{
        setOpenEdit(true)
        setId(id);
    }

    const handleDeleteBrand=async (id)=>{
        setOpen(true)
        setId(id);
    }

    const deleteUser=async ()=>{
        setOpen(false)
        const response = await HomeService.deleteBrand(id);
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
                    <Typography variant="h5" gutterBottom>Brands</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} className='mt-5 mb-3' style={{display:'flex',justifyContent:'flex-end'}}>
                    <Button variant="contained" style={{backgroundColor:'black'}} startIcon={<AddIcon />} onClick={handleClickOpen}>
                        new brand
                    </Button>
                </Grid>
                {posts.map(({_id, brand,category,image}, index) =>(
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{
                            py: 5,
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            textAlign: 'center',
                            borderRadius:'5%',}}>
                            <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} style={{margin: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                width: 120,
                                height: 120,
                                justifyContent: 'center',
                                marginTop: 10,
                                paddingTop:20,
                                marginBottom: 10}} alt='brands'/>
                            <Typography variant="h5" sx={{ paddingBottom: 1 }}>{brand}</Typography>
                            <Typography variant="subtitle2" sx={{ paddingBottom: 2 }}>
                                <Chip label={category} />
                            </Typography>
                            <IconButton size="small" aria-label="edit" className='mb-3 me-2' onClick={()=>{
                                handleEditBrand(_id)
                            }} style={{backgroundColor:'ghostwhite',}}>
                                <EditIcon />
                            </IconButton>
                            <IconButton size="small" aria-label="edit" className='mb-3 me-2' onClick={()=>{
                                handleDeleteBrand(_id)
                            }}  style={{backgroundColor:'ghostwhite',}}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
            <DeletePopUp open={open} handleCloseModal={handleCloseModal} deleteUser={deleteUser}/>
            {openAdd ? <AddBrandModal openAdd={openAdd} handleClickOpen={handleClickOpen} handleCloseOpen={handleCloseOpen} Transition={Transition} fetchDetails={fetchDetails}/> : null}
            {openEdit ? <EditBrandModal openEdit={openEdit} handleClickOpenEdit={handleClickOpenEdit} handleCloseOpenEdit={handleCloseOpenEdit} Transition={Transition} fetchDetails={fetchDetails} id={id}/> : null}
        </Box>
    )
}

export default BrandBody;