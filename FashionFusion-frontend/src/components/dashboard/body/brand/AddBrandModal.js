import React,{useEffect,useState,useRef} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Dialog from "@mui/material/Dialog";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import image from '../../../../assets/images/image.jpg'
import HomeService from "../../../../Services/HomeService";
import SnackBar from "../../../common/alert/SnackBar";

const AddBrandModal=(props)=>{

    const fileInputRef = useRef(null);
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [icon, setIcon] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getAllCategories()
    },[])

    const getAllCategories = async ()=>{
        const response  = await HomeService.fetchAllCategories();
        if (response.status === 200){
            setCategories(response.data)
        }

    }

    const handleClick = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        setIcon(event.target.files[0]);
    };

    const handleIconButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleAddBrand=async ()=>{

        const formData = new FormData();
        formData.append('category', category);
        formData.append('brand', brand);
        formData.append('image', icon);

        if (icon === '' || category === '' || brand === ''){
            setSeverity("error")
            setMessage("All fields are required!")
            handleClick()
        }else {
            const response = await HomeService.saveBrand(formData);
            if (response.status === 200){
                setSeverity("success")
                setMessage("Successfully Added!")
                handleClick()
                props.fetchDetails()
                props.handleCloseOpen()
            }
        }
    }

    return(
        <Dialog
            fullWidth
            maxWidth={'sm'}
            open={props.openAdd}
            TransitionComponent={props.Transition}
            keepMounted
            onClose={props.handleCloseOpen}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ m: 0, p: 2,paddingBottom:5 }}>

                {props.handleCloseOpen ? (
                    <IconButton
                        aria-label="close"
                        onClick={props.handleCloseOpen}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            marginBottom:10,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
                Add new brand
            </DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-slide-description">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6}>
                                <div style={{width:'100%',height:'90%',position:'relative',borderRadius:10}}>

                                    <Card sx={{ maxWidth: 345}}>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={imagePreview === '' ? image : imagePreview}
                                            alt="brand"
                                        />
                                    </Card>

                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileInputChange}
                                    />
                                    <IconButton aria-label="add to image" onClick={handleIconButtonClick} style={{position:'absolute',bottom:3,left:-12,backgroundColor:'white'}}>
                                        <CameraAltOutlinedIcon />
                                    </IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <div className="mb-5">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select className="form-select" aria-label="Default select example" onChange={(e)=>{
                                        setCategory(e.target.value)
                                    }}>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="brand" className="form-label mt-3">Brand</label>
                                    <input type="text" className="form-control" id="brand" onChange={(e)=>{
                                        setBrand(e.target.value)
                                    }}/>
                                </div>
                                <Button style={{backgroundColor:'black'}} fullWidth variant="contained" onClick={handleAddBrand}>Add</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContentText>
            </DialogContent>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
        </Dialog>
    )
}

export default AddBrandModal;