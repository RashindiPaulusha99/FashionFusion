import React,{useEffect,useState,useRef} from "react";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import HomeService from "../../../../Services/HomeService";
import Chip from "@mui/material/Chip";

const ViewProductModal=(props)=>{

    const [id, setId] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [qty, setQty] = useState('');
    const [discount, setDiscount] = useState('');
    const [volume, setVolume] = useState('');
    const [unitOfVolume, setUnitOfVolume] = useState('');
    const [price, setPrice] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    useEffect(()=>{
        getAllData(props.id)
    },[])

    const getAllData = async (id)=>{
        const response  = await HomeService.fetchItem(id);

        setImagePreview(response.data.image.data.data)
        setId(response.data._id)
        setBrand(response.data.brand)
        setCategory(response.data.category)
        setName(response.data.name)
        setDescription(response.data.description)
        setQty(response.data.qty_on_hand)
        setVolume(response.data.volume)
        setUnitOfVolume(response.data.unit_of_volume)
        setPrice(response.data.unit_price)
        setDiscount(response.data.discount)
    }

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return(
        <Dialog
            fullWidth
            maxWidth={'md'}
            open={props.openView}
            TransitionComponent={props.Transition}
            keepMounted
            onClose={props.handleCloseView}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ m: 0, p: 2,paddingBottom:2}}>

                {props.handleCloseView ? (
                    <IconButton
                        aria-label="close"
                        onClick={props.handleCloseView}
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
                View item
            </DialogTitle>
            <DialogContent sx={{height:'100vh'}}>
                <DialogContentText id="alert-dialog-slide-description">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6}>
                                <div style={{width:'100%',height:'90%',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',borderRadius:10}}>
                                    <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(imagePreview)} alt='product' style={{width:'100%',height:'100%',padding:15}}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <h2 style={{color:'darkslategray',marginBottom:16}}>{name}</h2>
                                <p><span style={{color:'darkslategray'}}>Brand : </span>{brand}</p>
                                <h6 style={{
                                    display:'inline-flex',
                                    color:'darkslategray'
                                }}>
                                    Category :
                                </h6>
                                <Chip label={category}
                                      style={{
                                          display:'inline-flex',
                                          backgroundColor:'paleturquoise',
                                          margin:6
                                      }}/>
                                <p><span style={{color:'darkslategray'}}>Qty : </span>{qty}</p>
                                <p><span style={{color:'darkslategray'}}>Volume : </span>{volume+" "+unitOfVolume}</p>
                                <h3 style={{display:'inline', fontWeight:'bolder',color:'cadetblue',marginTop:10}}>{"Rs: "+price+".00"}</h3>
                                {discount !== 0 ? <h5 className="block rounded font-bold uppercase" style={{width:'fit-content',padding:7,fontWeight:600,color:'mediumaquamarine',background:'mintcream',display:'inline',marginLeft:14}}>{discount+"% OFF"}</h5> : null}
                                <p style={{
                                    color:'darkslategray',
                                    marginTop:14,
                                }}>
                                    Product Details :
                                </p>
                                <p>{description}</p>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default ViewProductModal;