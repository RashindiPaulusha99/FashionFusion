import React, {useEffect, useState} from "react";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import HeaderIcons from "../layouts/home/HeaderIcons";
import Header from "../layouts/home/Header";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import HomeService from "../Services/HomeService";
import ItemService from "../Services/ProductService";
import Button from '@mui/material/Button';
import DeleteModal from "../components/common/model/DeleteModal";
import {useHistory} from "react-router-dom";
import { withRouter } from 'react-router-dom';

const Cart = (props) => {

    const [id, setId]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [posts, setPosts]=useState([])
    const [cartLength, setCartLength] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [shippingFee, setShippingFee] = useState(100);
    const [imageDataMap, setImageDataMap] = useState({});
    const [volumeDataMap, setVolumeDataMap] = useState({});
    const [open, setOpen] = useState(false);

    const history = useHistory();

    useEffect(()=>{
        handleCart();
    },[])

    const handleCart=async ()=>{
        const response = await HomeService.getCart(localStorage.getItem("userId"));

        if (response.status === 200){
            setPosts([...response.data])
            setCartLength(response.data.length)
            const total = response.data.reduce((acc, post) => acc + post.total_units_price, 0);
            setSubTotal(total);

            setTotal(total+shippingFee)
        }
    }

    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id)
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const handleGetImage=async (id)=>{
        const response = await ItemService.fetchItem(id);
    
        return response.data.item_image
    }

    const handleGetVolume=async (id)=>{
        const response = await ItemService.fetchItem(id);
        return response.data.volume + response.data.unit_of_volume
    }

    useEffect(() => {
        // Fetch all the image data for each item_Id in posts
        const fetchImageData = async () => {
            const promises = posts.map(({ item_Id }) => handleGetImage(item_Id));
            
            const imageDataList = await Promise.all(promises);

            // Create a map of item_Id to imageData for easy access
            const imageDataMap = posts.reduce((acc, { item_Id }, index) => {
                acc[item_Id] = imageDataList[index];
                return acc;
            }, {});

            setImageDataMap(imageDataMap);
        };

        const fetchVolumeData = async () => {
            const promises = posts.map(({ item_Id }) => handleGetVolume(item_Id));
            // const volumeDataList = await Promise.all(promises);

            // // Create a map of item_Id to imageData for easy access
            // const volumeDataMap = posts.reduce((acc, { item_Id }, index) => {
            //     acc[item_Id] = volumeDataList[index];
            //     return acc;
            // }, {});

            setVolumeDataMap(promises);
        };

        fetchImageData();
        // fetchVolumeData();
    }, [posts]);

    const openHomePage=()=>{

        history.push({
            pathname:'/home'
        });
    }

    const handlePayment=()=>{

        const temp={
            "total":total,
            "items":posts
        }

        history.push({
            pathname:'/payment',
            state: temp
        });
    }

    return(
            <div>
                <Header/>
                <HeaderIcons/>
                <Box sx={{ flexGrow: 1 }}>
                    {cartLength !== 0 ?
                        <Grid container spacing={1}>
                           <Grid item xs={12} md={8} lg={8} style={{width: '100%',margin:30}}>
                                {posts.map(({_id,brand,item_Id, qty,name,total_units_price,unit_price,user_Id}, index) =>(

                                    <Grid container spacing={1} style={{marginBottom:18,boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',borderRadius:8,cursor:'pointer'}}>
                                        <Grid item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center',}}>
                                            <img src={imageDataMap[item_Id]} alt="item" style={{margin:10,width:99,height:99,boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',borderRadius:5}}/>
                                        </Grid>
                                        <Grid item xs={12} md={4} lg={4} style={{display:'flex',justifyContent:'flex-start'}}>
                                            <p style={{margin:10,color:'black',fontWeight:'bold'}}>
                                                {name}
                                                <h6 style={{color:'black'}}>{brand}</h6>
                                                <h6 style={{color:'black',}}>{volumeDataMap[item_Id]}</h6>
                                            </p>
                                        </Grid>
                                        <Grid item xs={12} md={3} lg={3} style={{display:'flex',justifyContent:'flex-start'}}>
                                            <p style={{margin:10,color:'lightseagreen',fontWeight:900}}>{"Rs: "+unit_price+".00"}</p>
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'flex-start'}}>
                                            <p style={{margin:10,color:'black'}}>{"Qty: "+qty}</p>
                                        </Grid>
                                        <Grid item xs={12} md={1} lg={1} style={{display:'flex',justifyContent:'center'}}>
                                            <IconButton edge="end" aria-label="comments" style={{height:40,}} onClick={()=>{
                                                handleClickOpen(_id)
                                            }}>
                                                <DeleteOutlineOutlinedIcon />
                                            </IconButton>
                                        </Grid>

                                    </Grid>
                                    ))}
                            </Grid>

                            <Grid item xs={12} md={3} lg={3} style={{width: '100%',margin:30}}>
                                   <Grid container spacing={1} style={{marginBottom:18,boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',borderRadius:8,cursor:'pointer'}}>
                                        <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-start'}}>
                                            <h5 style={{margin:10,color:'black',fontWeight:'bold'}}>
                                                Order Summary
                                            </h5>

                                        </Grid>
                                       <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-start'}}>
                                           <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-start'}}>
                                               <p style={{marginLeft:10,}}>
                                                   Subtotal ({cartLength} items) :
                                               </p>
                                           </Grid>
                                           <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-end'}}>
                                               <p style={{marginRight:10,}}>
                                                   Rs: {subTotal}
                                               </p>
                                           </Grid>
                                       </Grid>
                                        <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-start'}}>
                                            <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-start'}}>
                                                <p style={{marginLeft:10,}}>
                                                    Shipping Fee :
                                                </p>
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-end'}}>
                                                <p style={{marginRight:10,}}>
                                                    Rs: {shippingFee}
                                                </p>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'center'}}>
                                            <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-start'}}>
                                                <p style={{marginLeft:10,}}>
                                                    Total :
                                                </p>
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'flex-end'}}>
                                                <p style={{marginRight:10,color:'crimson',fontWeight:700,fontSize:20}}>
                                                    Rs: {total}
                                                </p>
                                            </Grid>
                                        </Grid>
                                       <Grid item xs={12} md={12} lg={12} style={{display:'flex',justifyContent:'center'}}>
                                           <Button style={{margin:10,backgroundColor:'lightseagreen'}} fullWidth variant="contained" onClick={handlePayment}>Proceed</Button>
                                       </Grid>
                                    </Grid>
                            </Grid>
                        </Grid>
                    :
                        <>
                            <div style={{margin:10,display:"flex",justifyContent:'center'}}>
                                <p>Empty cart</p>
                            </div>
                            <div style={{margin:5,display:"flex",justifyContent:'center'}}>
                                <Button  size="large" variant="outlined" onClick={openHomePage}>
                                    Continue Shopping
                                </Button>
                            </div>
                        </>
                    }
                </Box>
                <DeleteModal
                    open={open}
                    onClose={handleClose}
                    id={id}
                    handleCart={handleCart}
                />
            </div>
    )
}

export default withRouter(Cart);