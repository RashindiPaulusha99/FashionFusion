import React,{Fragment,useEffect,useState} from "react";
import '../assets/css/normalize.css';
import '../assets/css/vendor.css';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import Category from "../components/Home/Category";
import NewlyArrivedBrands from "../components/Home/NewlyArrivedBrands";
import HeaderBanner from "../components/Home/HeaderBanner";
import MiddleBanners from "../components/Home/MiddleBanners";
import Form from "../components/Home/Form";
import HeaderIcons from "../layouts/home/HeaderIcons";
import Header from "../layouts/home/Header";
import Search from "../layouts/home/Search";
import BestSellingProducts from "../components/Home/BestSellingProducts";
import Blog from "../components/Home/Blog";
import AllProducts from "../components/Home/AllProducts";
import Badges from "../components/Home/Badges";
import Services from "../components/Home/Services";
import Footer from "../layouts/home/Footer";

const Home=()=>{

    return(
        <Fragment>
            <HeaderIcons/>
            <Search/>
            <Header/>
            <HeaderBanner/>
            <Category/>
            <NewlyArrivedBrands/>
            <AllProducts/>
            <MiddleBanners/>
            <BestSellingProducts/>
            <Form/>
            <Blog/>
            <Badges/>
            <Services/>
            <Footer/>

        </Fragment>
    );
}

export default withRouter(Home);