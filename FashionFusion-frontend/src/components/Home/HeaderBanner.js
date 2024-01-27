import React, {Fragment, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import vegetables_broccoli from "../../assets/images/icon-vegetables-broccoli.png";
import Slider from "infinite-react-carousel";
import productThumb1 from "../../assets/images/fashion/virtual-fashion-apps-2-683x1024.webp";
import productThumb from "../../assets/images/fashion/retail-clothing-try-on-via-mobile-and-kiosk-augmented-reality+(2).png";
import productThumb2 from "../../assets/images/fashion/viubox-746x620.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HeaderBanner=()=>{

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(

        <section className="py-3 background-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">

                        <div className="banner-blocks">

                            <div className="banner-ad large bg-info block-1 ">

                                <div className="swiper main-swiper">
                                    <div className="swiper-wrapper">
                                        <Carousel responsive={responsive} showDots={true}>
                                            <div className="swiper-slide">
                                                <div className="row banner-content p-5">
                                                    <div className="content-wrapper col-md-7">
                                                        <div className="categories mb-3 pb-3">Lorem ipsum</div>
                                                        <h3 className="banner-title">Lorem ipsum dolor sit amet</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                        <a href="#g" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">shop collection</a>
                                                    </div>
                                                    <div className="img-wrapper col-md-5">
                                                        <img src={productThumb} className="img-fluid" alt='product_thumb1'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="row banner-content p-5">
                                                    <div className="content-wrapper col-md-7">
                                                        <div className="categories mb-3 pb-3">Lorem ipsum</div>
                                                        <h3 className="banner-title">Lorem ipsum dolor sit amet</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                        <a href="#g" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">shop collection</a>
                                                    </div>
                                                    <div className="img-wrapper col-md-5">
                                                        <img src={productThumb1} className="img-fluid" alt='product_thumb1'/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="row banner-content p-5">
                                                    <div className="content-wrapper col-md-7">
                                                        <div className="categories mb-3 pb-3">Lorem ipsum</div>
                                                        <h3 className="banner-title">Lorem ipsum dolor sit amet</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                        <a href="#g" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">shop collection</a>
                                                    </div>
                                                    <div className="img-wrapper col-md-5">
                                                        <img src={productThumb2} className="img-fluid" alt='product_thumb2'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>

                            <div className="banner-ad bg-success block-2 banner-ad-image1">
                                <div className="row banner-content p-5">

                                    <div className="content-wrapper col-md-7">
                                        <div className="categories sale mb-3 pb-3">Lorem ipsum</div>
                                        <h3 className="banner-title">Lorem ipsum dolor sit amet</h3>
                                        <a href="#g" className="d-flex align-items-center nav-link">shop collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                                    </div>

                                </div>
                            </div>

                            <div className="banner-ad bg-danger block-3 banner-ad-image2">
                                <div className="row banner-content p-5">

                                    <div className="content-wrapper col-md-7">
                                        <div className="categories sale mb-3 pb-3">Lorem ipsum</div>
                                        <h3 className="item-title">Lorem ipsum dolor sit amet</h3>
                                        <a href="#g" className="d-flex align-items-center nav-link">shop collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderBanner;