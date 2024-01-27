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

const AddProductModal=(props)=>{

    const fileInputRef = useRef(null);
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [qty, setQty] = useState('');
    const [discount, setDiscount] = useState('');
    const [volume, setVolume] = useState('');
    const [unitOfVolume, setUnitOfVolume] = useState('');
    const [price, setPrice] = useState('');
    const [icon, setIcon] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [state, setState] = useState(false);
    const [severity, setSeverity] = useState('warning');
    const [message, setMessage] = useState('All fields are required!');
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getAllCategoriesAndBrands()
    },[])

    const getAllCategoriesAndBrands = async ()=>{
        const response  = await HomeService.fetchAllBrands();
        if (response.status === 200){
            setBrands(response.data)
        }

        const responses  = await HomeService.fetchAllCategories();
        if (responses.status === 200){
            setCategories(responses.data)
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

    const handleAddProduct=async ()=>{

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('brand', brand);
        formData.append('qty_on_hand', qty);
        formData.append('discount', discount);
        formData.append('volume', volume);
        formData.append('unit_of_volume', unitOfVolume);
        formData.append('unit_price', price);
        formData.append('image', icon);

        if (icon === '' || category === '' || brand === '' || name === '' || description === '' || qty === '' || discount === '' || volume === '' || unitOfVolume === '' || price === ''){
            setSeverity("error")
            setMessage("All fields are required!")
            handleClick()
        }else {
            const response = await HomeService.saveItem(formData);
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
            maxWidth={'md'}
            open={props.openAdd}
            TransitionComponent={props.Transition}
            keepMounted
            onClose={props.handleCloseOpen}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ m: 0, p: 2,paddingBottom:3}}>

                {props.handleCloseOpen ? (
                    <IconButton
                        aria-label="close"
                        onClick={props.handleCloseOpen}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            marginBottom:6,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
                Add new item
            </DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-slide-description">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} lg={4}>
                                <div style={{width:'100%',height:'90%',position:'relative',borderRadius:10}}>

                                    <Card sx={{ maxWidth: 345,}}>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={imagePreview === '' ? image : imagePreview}
                                            alt="item"
                                        />
                                    </Card>

                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileInputChange}
                                    />
                                    <IconButton aria-label="add to image" onClick={handleIconButtonClick} style={{position:'absolute',bottom:-24,left:-12,backgroundColor:'white'}}>
                                        <CameraAltOutlinedIcon />
                                    </IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={8} lg={8}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} lg={6}>
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
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <label htmlFor="brand" className="form-label">Brand</label>
                                        <select className="form-select" aria-label="Default select example" onChange={(e)=>{
                                            setBrand(e.target.value)
                                        }}>
                                            {brands.map((brand, index) => (
                                                <option key={index} value={brand}>
                                                    {brand}
                                                </option>
                                            ))}
                                        </select>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <label htmlFor="name" className="form-label mt-3">Name</label>
                                        <input type="text" className="form-control" id="name" onChange={(e)=>{
                                            setName(e.target.value)
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <label htmlFor="qty" className="form-label mt-3">Qty On Hand</label>
                                        <input type="text" className="form-control" id="qty" onChange={(e)=>{
                                            setQty(e.target.value)
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <label htmlFor="desc" className="form-label mt-3">Description</label>
                                        <textarea className="form-control" id="desc" rows="3" onChange={(e)=>{
                                            setDescription(e.target.value)
                                        }}></textarea>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={3} lg={3}>
                                        <label htmlFor="discount" className="form-label mt-3">Discount(%)</label>
                                        <input type="text" className="form-control" id="discount" onChange={(e)=>{
                                            setDiscount(e.target.value)
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12} md={3} lg={3}>
                                        <label htmlFor="price" className="form-label mt-3">Unit Price(Rs.)</label>
                                        <input type="text" className="form-control" id="price"  onChange={(e)=>{
                                            setPrice(e.target.value)
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12} md={3} lg={3}>
                                        <label htmlFor="volume" className="form-label mt-3">Volume</label>
                                        <input type="text" className="form-control" id="volume" onChange={(e)=>{
                                            setVolume(e.target.value)
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12} md={3} lg={3}>
                                        <label htmlFor="unitVolume" className="form-label mt-3">Unit Of Volume</label>
                                        <input type="text" className="form-control" id="unitVolume" onChange={(e)=>{
                                            setUnitOfVolume(e.target.value)
                                        }}/>
                                    </Grid>
                                </Grid>
                                <Button style={{backgroundColor:'black'}} className='mt-4 mb-3' fullWidth variant="contained" onClick={handleAddProduct}>Add</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContentText>
            </DialogContent>
            <SnackBar state={state} handleClose={handleClose} message={message} severity={severity}/>
        </Dialog>
    )
}

export default AddProductModal;