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

const EditCategoryModal=(props)=>{

    const fileInputRef = useRef(null);
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    const [icon, setIcon] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');

    useEffect(()=>{
        setId(props.id)
        loadData(props.id)
    },[])

    const loadData=async (id)=>{
        const response = await HomeService.fetchACategory(id);
        if (response.status === 200){
            setCategory(response.data.category)
            setImagePreview('data:image/jpeg;base64,'+arrayBufferToBase64(response.data.image.data.data));
        }
    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

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

    const handleEditCategory=async ()=>{

        if (category === ''){
            setSeverity("error")
            setMessage("All fields are required!")
            handleClick()
        }else {
            if (icon === '') {
                const formData = new FormData();
                formData.append('category', category);

                const response = await HomeService.updateCategory(id, formData);
                if (response.status === 200) {
                    setSeverity("success")
                    setMessage("Successfully Updated!")
                    handleClick()
                    props.fetchDetails()
                    props.handleCloseOpenEdit()
                }
            } else {
                const formData = new FormData();
                formData.append('category', category);
                formData.append('image', icon);

                const response = await HomeService.updateCategory(id, formData);
                console.log(response.data)
                if (response.status === 200) {
                    setSeverity("success")
                    setMessage("Successfully Updated!")
                    handleClick()
                    props.fetchDetails()
                    props.handleCloseOpenEdit()
                }
            }
        }
    }

    return(
        <Dialog
            fullWidth
            maxWidth={'sm'}
            open={props.openEdit}
            TransitionComponent={props.Transition}
            keepMounted
            onClose={props.handleCloseOpenEdit}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ m: 0, p: 2,paddingBottom:5 }}>

                {props.handleCloseOpenEdit ? (
                    <IconButton
                        aria-label="close"
                        onClick={props.handleCloseOpenEdit}
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
                Edit category
            </DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-slide-description">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6}>
                                <div style={{width:'100%',height:'90%',position:'relative',borderRadius:10}}>
                                    <div style={{
                                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
                                        maxWidth: 345,
                                        height: '200px',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}>
                                        <Card sx={{ maxWidth: 120,boxShadow:'none',position:"absolute",top:39,bottom:0,left:0,right:0,margin:"auto" }}>
                                            <CardMedia
                                                component="img"
                                                height="120px"
                                                image={imagePreview === '' ? image : imagePreview}
                                                alt="category"
                                            />
                                        </Card>
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileInputChange}
                                    />
                                    <IconButton aria-label="add to image" onClick={handleIconButtonClick} style={{position:'absolute',bottom:-36,left:-18,backgroundColor:'white'}}>
                                        <CameraAltOutlinedIcon />
                                    </IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <div className="mb-5">
                                    <label htmlFor="fruits" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="fruits" value={category} placeholder="Fruits" onChange={(e)=>{
                                        setCategory(e.target.value)
                                    }}/>
                                </div>
                                <Button style={{backgroundColor:'black'}} fullWidth variant="contained" onClick={handleEditCategory}>Edit</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContentText>
            </DialogContent>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
        </Dialog>
    )
}

export default EditCategoryModal;