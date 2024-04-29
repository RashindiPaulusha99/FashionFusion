import React, {Fragment, useEffect, useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ModalCart from "../components/common/model/ModalCart";
import Slide from "@mui/material/Slide";
import ItemService from "../Services/ProductService";
import ProductsHeader from "../layouts/home/ProductsHeader";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Products=(props)=>{

    const [status, setStatus] = useState('');
    const [itemLength, setItemLength] = useState(0);
    const [posts, setPosts] = useState([]);
    const [showNextButton, setShowNextButton] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");

    useEffect(()=>{
        fetchDetails(props.location.state.status);
        setStatus(props.location.state.status)
    }, []);

    const fetchDetails = async(status)=>{
        const response = await ItemService.fetchItems(status);

        if (response.status === 200){
            setPosts([...response.data]);
            setItemLength(response.data.length)
        }
    }

    const handleClickOpen =async (e) => {
        setId(e)
        setOpen(true);
    };

    const handleClose = () => {
        setId("")
        setOpen(false);
    };

    const handleNextButton = (event, value) => {
        setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
    };

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const handleSort=async (e)=>{
        if (e == 1){
            sort("ASC'")
        }else if (e == 2){
            sort("DESC")
        }else if (e == 0){
            fetchDetails(status)
        }
    }

    const sort = async (order)=>{
        const responseAsc = await ItemService.fetchItemsByOrder(status,order)
        if (responseAsc.status === 200){
            setPosts([...responseAsc.data]);
            setItemLength(responseAsc.data.length)
        }
    }

    return(
        <Fragment>
            <ProductsHeader/>
            <HeaderIcons />
            <section className="overflow-hidden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="tabs-header d-flex justify-content-between my-3">
                                <h5>{"Category → " +status+" "}<span style={{fontSize:13,color:'black',fontWeight:'bold'}}>{itemLength !== 0 ? "("+itemLength + " Items Found)" : "(No Items Found)"}</span></h5>
                                <div className="d-flex align-items-center">
                                    <a className="btn-link text-decoration-none" style={{display:'contents'}}>Sort by → <span>
                                        <select className="form-select form-select-sm"
                                                aria-label=".form-select-sm example"
                                                style={{borderColor:'transparent'}}
                                                defaultValue="All"
                                                onChange={(e)=>{
                                                    handleSort(e.target.value)
                                                }}
                                        >
                                          <option value="0">All</option>
                                          <option value="1">Lowest Price</option>
                                          <option value="2">Highest Price</option>
                                        </select>
                                    </span></a>
                                </div>
                            </div>

                            <div className="products-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Box sx={{ flexGrow: 1 }} >
                                        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                                            {posts.slice(0, itemsToShow).map(({_id,image,name,colours,unit_price,sizes,brand}, index) =>(
                                                <Grid item xs={4} lg={2.4} md={2.4}  key={index} >
                                                    <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(_id)}>
                                                        <div className="product-item">

                                                            <figure>
                                                                <a title="Product Title">
                                                                    <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} alt='thumb bananas' className="tab-image"/>
                                                                </a>
                                                            </figure>
                                                            <h3>{name}</h3>
                                                            <span className="qty">{brand}</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                            <span className="price">{"Rs "+unit_price+".00"}</span>
                                                            <div className="d-flex align-items-center justify-content-between">

                                                                <a className="btn-wishlist">
                                                                    <svg width="24" height="24">
                                                                        <use xlinkHref="#plus"></use>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </div>
                                <div className="swiper-buttons paginate">
                                    {itemsToShow < posts.length && (<Button variant="contained" size="medium" onClick={handleNextButton} disabled={!showNextButton} style={{backgroundColor:'black'}}>
                                        load more
                                    </Button>)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {open ? <ModalCart open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} id={id} Transition={Transition} /> : null}
            </section>
        </Fragment>
    )
}

export default withRouter(Products);