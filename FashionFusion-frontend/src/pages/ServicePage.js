import React,{Fragment,useEffect,useState} from "react";
import Header from "../layouts/home/Header";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Footer from "../layouts/home/Footer";
import bgImage from "../assets/images/blogs/CustomerService-1.jpg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Grid from "@mui/material/Grid";
import bgImage1 from "../assets/images/responsible-icon-3-removebg-preview.png";
import bgImage2 from "../assets/images/blogs/Food-Grocery-Vegetables-1140771380.jpg";
import Box from "@mui/material/Box";

const ServicePage=()=>{

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return(
        <Fragment>
            <Header/>
            <HeaderIcons/>
            <div style={{width:'100%',height:'30rem',marginBottom:30,backgroundImage:`url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:'white',background:'rgba(0, 0, 0, 0.54)',width:300,height:100,display:'flex',justifyContent:"center",alignItems:"center",border:'6px solid white'}}>Services</h1>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
                <h1 style={{textAlign:"center",fontWeight:"bold",color:'black',borderBottom:'3px solid',borderBottomColor:'black'}}>Our Services</h1>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:50}}>
                <p style={{textAlign:'center',}}>Discover our comprehensive range of services designed to elevate your shopping experience. From innovative virtual try-on capabilities to hassle-free returns, we're committed to providing convenience, quality, and style at every step of your journey.</p>
            </div>
            <div className="category-carousel swiper" style={{marginLeft:100,marginRight:100}}>
                <div className="swiper-wrapper">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Free Delivery</h3>
                                    <p style={{textAlign:'center',}}>Enjoy hassle-free shopping with our complimentary delivery service! Experience the convenience of having your favorite items delivered right to your doorstep, free of charge. Shop now and let us take care of the shipping fees.</p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Secure Payment</h3>
                                    <p style={{textAlign:'center',}}>Our Secure Payment system employs state-of-the-art encryption technology to safeguard your financial information, providing you with peace of mind while making online purchases.</p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Quality Guarantee</h3>
                                    <p style={{textAlign:'center',}}>Shop confidently with our quality guarantee. We ensure that every product meets the highest standards, so you can trust in the excellence of your purchase.</p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Guaranteed Savings</h3>
                                    <p style={{textAlign:'center',}}>Enjoy peace of mind with our guaranteed savings. Find the best deals and discounts every day, ensuring you get the most value out of your shopping experience.</p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Daily Offers</h3>
                                    <p style={{textAlign:'center',}}>Discover unbeatable deals with our daily offers. Enjoy exclusive discounts and promotions on a wide range of products every day, making your shopping experience even more rewarding.</p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Virtual Wardrobe Integration</h3>
                                    <p style={{textAlign:'center',}}>Enable users to save their favorite outfits virtually, allowing them to mix and match items, create looks, and revisit their selections for future purchases.</p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>

                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Style Recommendations</h3>
                                    <p style={{textAlign:'center',}}>Implement an AI-powered recommendation system that suggests complementary clothing items based on the user's preferences, previous purchases, and current selections, offering personalized styling advice to enhance the shopping experience.</p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>

                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default ServicePage;