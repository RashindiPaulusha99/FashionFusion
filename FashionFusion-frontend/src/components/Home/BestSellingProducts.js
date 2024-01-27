import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import HomeService from "../../Services/HomeService";
import ModalCart from "../common/model/ModalCart";
import Button from "@mui/material/Button";
import blouse1 from "../../assets/images/fashion/1.jpg";
import blouse2 from "../../assets/images/fashion/5318_1661777425.webp";
import trouser1 from "../../assets/images/fashion/vb1927392_yarrel_trouser_black-copy.webp";
import trouser2 from "../../assets/images/fashion/0123M-PA04-WORN-PATH-TROUSER-TAN_1200x1800_1e2121fb-11f0-48b0-b445-b43ddb6e54ad_300x.webp";
import tshirt1 from "../../assets/images/fashion/keafdfkrmycagehwm92r.png";
import frock1 from "../../assets/images/fashion/pinkmaxi1.jpg";
import frock2 from "../../assets/images/fashion/8a0020c6b15341db65955dba872383db46187148.jpeg";
import skirt1 from "../../assets/images/fashion/61tkOSirn1L._AC_SX385_.jpg";
import underwear1 from "../../assets/images/fashion/e974020c-31c1-41c0-8303-d2d924d76c50_1.713ec6a3112b9272ee204d5a01f64e9e.webp";
import bra1 from "../../assets/images/fashion/41stC8oximL._UX342_.jpg";

const BestSellingProducts=(props)=>{

    const [status, setStatus] = useState('All');
    const [posts, setPosts] = useState([]);
    const [showNextButton, setShowNextButton] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(10);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");

    const handleClickOpen =async (e) => {
        setId(e)
        setOpen(true);
    };

    const handleClose = () => {
        setId("")
        setOpen(false);
    };

    useEffect(()=>{
        fetchDetails();
    }, []);

    const fetchDetails = async()=>{
        const response = await HomeService.fetchItems(status);

        if (response.status === 200){
            setPosts(response.data);
        }
    }

    const handleNextButton = (event, value) => {
        setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
    };

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return(
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="section-header d-flex justify-content-between my-5">

                            <h2 className="section-title">Best selling products</h2>

                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="products-carousel swiper">
                            <div className="swiper-wrapper">
                                <Box sx={{ flexGrow: 1 }} >
                                    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} >
                                        {/*{posts.slice(0, itemsToShow).map(({_id,image,name,unit_of_volume,unit_price,volume}, index) =>(
                                            <Grid item xs={4} lg={2.4} md={2.4}  key={index} >
                                                <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(_id)}>
                                                    <div className="product-item">

                                                        <figure>
                                                            <a title="Product Title">
                                                                <img src={'data:image/jpeg;base64,'+arrayBufferToBase64(image.data.data)} alt='thumb bananas' className="tab-image"/>
                                                            </a>
                                                        </figure>
                                                        <h3>{name}</h3>
                                                        <span className="qty">{volume+" "+unit_of_volume}</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
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
                                        ))}*/}
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={blouse1} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={trouser1} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={frock1} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={tshirt1} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={skirt1} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={underwear1} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={bra1} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={blouse2} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={trouser2} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
                                        <Grid item xs={4} lg={2.4} md={2.4}  >
                                            <div className="col" style={{cursor:'pointer'}} onClick={(e)=> handleClickOpen(1)}>
                                                <div className="product-item">
                                                    <figure>
                                                        <a title="Product Title">
                                                            <img src={frock2} alt='thumb bananas' className="tab-image"/>
                                                        </a>
                                                    </figure>
                                                    <h3>Lorem ipsum</h3>
                                                    <span className="qty">lorem ipsum</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                                    <span className="price">{"Rs 1000.00"}</span>
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
    )
}

export default BestSellingProducts;