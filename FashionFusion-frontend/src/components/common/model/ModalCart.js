import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";
import { useState } from "react";
import Chip from '@mui/material/Chip';
import '../../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import HomeService from "../../../Services/HomeService";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const useStyle = makeStyles((theme) => ({
    root: {

        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:'transparent'
        },
        "& .MuiOutlinedInput-input":{
            textAlign:'center'
        }
    }
}));

const ModalCart=(props)=>{

    const history = useHistory();

    const[id, setId]=useState('')
    const[image, setImage]=useState('')
    const[name, setName]=useState('')
    const[description, setDescription]=useState('')
    const[category, setCategory]=useState('')
    const[qtyOnHand, setQtyOnHand]=useState(0)
    const[brand, setBrand]=useState('')
    const[discount, setDiscount]=useState(0)
    const[volume, setVolume]=useState(0)
    const[unitOfVolume, setUnitOfVolume]=useState('')
    const[unitPrice, setUnitPrice]=useState(0)
    const [countCart, setCountCart] = useState(1);
    const userData = useSelector((state) => state.login.isLogged);

    const style = useStyle();

    useEffect(()=>{
        test(props.id)
    },[])

    const test=async (e)=>{
        const response  = await HomeService.fetchItem(e);

        setImage(response.data.image.data.data)
        setId(response.data._id)
        setBrand(response.data.brand)
        setCategory(response.data.category)
        setName(response.data.name)
        setDescription(response.data.description)
        setQtyOnHand(response.data.qty_on_hand)
        setVolume(response.data.volume)
        setUnitOfVolume(response.data.unit_of_volume)
        setUnitPrice(response.data.unit_price)
        setDiscount(response.data.discount)
    }
    
    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const handleMinus = () => {
        setCountCart((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const handlePlus = () => {
        setCountCart((prevCount) => (prevCount < 100 ? prevCount + 1 : 100));
    };

    const handleCart = async () => {
        var price;
        if (discount !== 0) {
            price = unitPrice * (100 - discount) / 100;
        } else {
            price = unitPrice;
        }

        const cart = {
            "user_Id": userData.id,
            "item_Id": id,
            "name": name,
            "brand": brand,
            "qty": countCart,
            "unit_price": unitPrice,
            "total_units_price": price * countCart
        };

        const carts = await HomeService.getCart(userData.id);
        console.log(carts)

        if (carts.data.length !== 0) {
            let itemFound = false;
            for (let dataKey in carts.data) {
                if (id === carts.data[dataKey].item_Id) {
                    const updateCart = {
                        "user_Id": userData.id,
                        "item_Id": id,
                        "name": name,
                        "brand": brand,
                        "qty": countCart + carts.data[dataKey].qty,
                        "unit_price": unitPrice,
                        "total_units_price": price * (countCart + carts.data[dataKey].qty)
                    };
                    const response = await HomeService.updateCart(carts.data[dataKey]._id, updateCart);

                    if (response.status === 200) {
                        itemFound = true;

                        history.push({
                            pathname: '/cart'
                        });
                        break;
                    }
                }
            }

            if (!itemFound) {
                const response = await HomeService.saveCart(cart);

                if (response.status === 200) {
                    history.push({
                        pathname: '/cart'
                    });
                }
            }
        } else {
            const response = await HomeService.saveCart(cart);

            if (response.status === 200) {
                history.push({
                    pathname: '/cart'
                });
            }
        }
    };

    return(

        <Dialog
        fullWidth
        maxWidth={'lg'}
        open={props.open}
        TransitionComponent={props.Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2,paddingBottom:5 }}>
            
            {props.handleClose ? (
                <IconButton
                aria-label="close"
                onClick={props.handleClose}
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
        </DialogTitle>
        <DialogContent sx={{height:'100vh'}}>
          <DialogContentText id="alert-dialog-slide-description">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                <div style={{width:'100%',height:'90%',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',borderRadius:10}}>
                    <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image)} alt='product' style={{width:'100%',height:'100%',padding:20}}/>
                </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <h2 style={{color:'darkslategray',marginBottom:16}}>{name}</h2>
                    <p><span style={{color:'darkslategray'}}>Brand : </span>{brand}</p>
                    <h5>{volume+" "+unitOfVolume}</h5>
                    <h3 style={{display:'inline', fontWeight:'bolder',color:'cadetblue',marginTop:10}}>{"Rs: "+unitPrice+".00"}</h3>
                    {discount !== 0 ? <h5 className="block rounded font-bold uppercase" style={{width:'fit-content',padding:7,fontWeight:600,color:'mediumaquamarine',background:'mintcream',display:'inline',marginLeft:14}}>{discount+"% OFF"}</h5> : null}
                    <div className="input-group product-qty">
                        <IconButton aria-label="minus" onClick={handleMinus}>
                            <RemoveIcon />
                        </IconButton>
                        <TextField
                            className={style.root}
                            sx={{
                                width: '10ch',
                                borderColor:'transparent'
                            }}
                            id="outlined-size-small"
                            type="text"
                            value={countCart}
                            size="small"
                            readonly
                        />
                        <IconButton aria-label="plus"
                                    onClick={handlePlus}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                    <div>
                        <Button size='large'
                                fullWidth
                                variant="outlined"
                                style={{
                                    marginBottom:14,
                                    marginTop:14,
                                    height:50,
                                    borderColor:"transparent",
                                    color:"white",
                                    backgroundColor:'mediumturquoise',
                                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                                }}
                                startIcon={<ShoppingBagOutlinedIcon/>}
                                onClick={handleCart}>
                            Add To Cart
                        </Button>
                    </div>
                    <h6 style={{
                            display:'inline-flex',
                            color:'darkslategray'
                        }}>
                        Tags : 
                    </h6>
                    <Chip label="Local"
                          style={{
                              display:'inline-flex',
                              backgroundColor:'paleturquoise',
                              margin:6,
                          }}/>
                    <Chip label={category}
                          style={{
                              display:'inline-flex',
                              backgroundColor:'paleturquoise',
                              margin:6
                          }}/>
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

export default ModalCart;