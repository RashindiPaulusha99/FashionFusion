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
                <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci assumenda, consectetur cumque doloremque, eaque enim esse fugiat id modi molestias necessitatibus nulla perferendis possimus quaerat quia repellat voluptatem! eaque enim esse fugiat id modi. </p>
            </div>
            <div className="category-carousel swiper" style={{marginLeft:100,marginRight:100}}>
                <div className="swiper-wrapper">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Lorem ipsum</h3>
                                    <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet. Accusamus ad adipisci assumenda, consectetur doloremque, eaque enim  repellat voluptatem! </p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Lorem ipsum</h3>
                                    <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet. Accusamus ad adipisci assumenda, consectetur doloremque, eaque enim  repellat voluptatem! </p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Lorem ipsum</h3>
                                    <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet. Accusamus ad adipisci assumenda, consectetur doloremque, eaque enim  repellat voluptatem! </p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Lorem ipsum</h3>
                                    <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet. Accusamus ad adipisci assumenda, consectetur doloremque, eaque enim  repellat voluptatem! </p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Lorem ipsum</h3>
                                    <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet. Accusamus ad adipisci assumenda, consectetur doloremque, eaque enim  repellat voluptatem! </p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Lorem ipsum</h3>
                                    <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet. Accusamus ad adipisci assumenda, consectetur doloremque, eaque enim  repellat voluptatem! </p>
                                </a>
                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>

                            </Grid>
                            <Grid item xs={12} md={4} lg={4} style={{marginBottom:40,}}>
                                <a className="nav-link category-item swiper-slide me-3 ms-2" >
                                    <img src={bgImage1} alt='icon-bread-baguette' style={{width:'25%'}}/>
                                    <h3 className="category-title">Lorem ipsum</h3>
                                    <p style={{textAlign:'center',}}>Lorem ipsum dolor sit amet. Accusamus ad adipisci assumenda, consectetur doloremque, eaque enim  repellat voluptatem! </p>
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